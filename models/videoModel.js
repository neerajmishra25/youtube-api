const mongoose = require("mongoose");
require("mongoose-type-url");

const videoSchema = mongoose.Schema(
	{
		videoId: {
			type: String,
			unique: true,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
		},
		videoUrl: {
			type: mongoose.SchemaTypes.Url,
			required: true,
		},
		thumbnails: {},
		statistics: {
			views_count: {
				type: Number,
				required: true,
			},
			likes_count: {
				type: Number,
				required: true,
			},
			dislikes_count: {
				type: Number,
				required: true,
			},
		},
		channel: {
			// id: {
			// 	type: String,
			// 	required: true,
			// },
			title: {
				type: String,
				required: true,
			},
			desc: {
				type: String,
			},
			thumbnails: {},
			subscriberCount: {
				type: Number,
			},
		},
	},
	{ timestamps: true }
);
module.exports = Video = mongoose.model("Video", videoSchema);
