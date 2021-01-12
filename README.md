# youtube-api

This is the built on node.js using api's to fetch the trending videos from the youtube. For now it will bring the 50 results and update the data which is already available.
If needed we can fetch more data using the next page token. It consits of three api's which are described in the detail below. There is also the frontend part of the application which is built on PHP. 

To View the frontend part of the application please click on the link below:<br />
https://youtube-php-frontend.herokuapp.com/

To install this application you need to follow these instructions:
1. Clone the repository and install the node modules.
2. you also need to set up the .env file and put the environment variables from the email.

Api's Details:<br />
Base Url : https://youtube-api-nk.herokuapp.com

To Get All the videos:<br />
  Url : https://youtube-api-nk.herokuapp.com/video/ <br />
  Method: GET <br />
  Desc : It will basically fetch the trending videos list available in the database. <br />

To Get the video details: <br />
  Url : https://youtube-api-nk.herokuapp.com/video/:id <br />
  Method: GET<br />
  Desc : It will fetch all the details about a single video. <br />

To update the feed:<br />
  Url : https://youtube-api-nk.herokuapp.com/video/ <br />
  Method: PUT <br />
  Desc : It will update the video feed in the database. <br />

If any issue in using the api's then please contact neerajm63@gmail.com or directly call on 9509045036
