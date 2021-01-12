const Video = require("../models/videoModel");
const axios = require("axios");

const getVideos = async () => {
	const vidData = await axios.get(
		`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${process.env.GOOGLE_API_KEY}`
	);
	return await Promise.all(
		vidData.data.items.map(async (item) => {
			const channelId = item.snippet.channelId;

			const channelData = await axios.get(
				`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${process.env.GOOGLE_API_KEY}`
			);
			let channel = channelData.data.items[0];

			let video = new Video({
				videoId: item.id,
				title: item.snippet.title,
				desc: item.snippet.description,
				videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
				thumbnails: item.snippet.thumbnails,
				statistics: {
					views_count: item.statistics.viewCount,
					likes_count: item.statistics.likeCount,
					dislikes_count: item.statistics.dislikeCount,
				},
				channel: {
					title: channel.snippet.title,
					desc: channel.snippet.description,
					thumbnails: channel.snippet.thumbnails,
					subscriberCount: channel.statistics.subscriberCount,
				},
			});
			return video;
		})
	);
};
exports.postVideos = async (req, res) => {
	try {
		const videos = await getVideos();
		await Video.deleteMany({});
		await Promise.all(videos.map(async (video) => await video.save()));
		return res.status(200).json({
			staus: "success",
			msg: "Videos re-uploaded successfully",
		});
	} catch (error) {
		console.error(error);
	}
};
exports.putVideos = async (req, res) => {
	try {
		const videos = await getVideos();

		const newVideos = await Promise.all(
			videos.map(async (video) => {
				let newVideo = video.toObject();
				delete newVideo._id;
				return await Video.findOneAndUpdate(
					{ videoId: video.videoId },
					newVideo,
					{
						upsert: true,
						new: true,
						// setDefaultsOnInsert: true,
					}
				);
			})
		);
		return res.status(200).json({
			staus: "success",
			msg: "Trending Video List updated successfully",
			data: videos,
		});
	} catch (error) {
		console.error(error);
	}
};

exports.getVideos = async (req, res) => {
	const videos = await Video.find({}).select("title thumbnails videoId");
	return res.json(videos);
};

exports.getVideosDetails = async (req, res) => {
	const videos = await Video.findById(req.params.id);
	console.log(videos);
	console.log(req.params.id);

	return res.json(videos);
};
