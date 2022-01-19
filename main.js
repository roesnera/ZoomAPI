// const request = require("request");
import fetch from "node-fetch";
// const options1 = {
//   method: 'POST',
//   url: 'https://zoom.us/oauth/token?grant_type=client_credentials',
//   headers: {
//     /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
//     **/
//    Authorization: 'Basic ' + Buffer.from("92itCAzGQSyVpq6JcchF6A:7dTT78oPisi6Nzh6EyW5ambGP11N8qJP").toString('base64')
//   }
//   };


//   function getAuth() {
//   request(options1, function(error, response, body) {
//    if (error) throw new Error(error);

//    console.log(body);
//    return body.access_token;
//   });
// }



// const token = getAuth();

const personalMeetingID = "7303593917";

// const options = {
//   method: 'GET',
//   // url: `https://api.zoom.us/v2/metrics/meetings/${personalMeetingID}/participants`,
//   url: "https://api.zoom.us/v2/users/me",
//   headers: {
//     /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
//     **/
//    "Authorization": 'Bearer ' + token
//   }
//   };

//   request(options, function(error, response, body) {
//    if (error) throw new Error(error);

//    console.log(body);
//   });


// Trying with Fetch() to resolve chaining issues

const endpoint = `https://api.zoom.us/v2/metrics/meetings/${personalMeetingID}/participants`;
const authURL = 'https://zoom.us/oauth/token?grant_type=client_credentials';

const grabList = async () => {
  try{
    const token = await fetch(authURL, {
      method: 'POST',
      headers: {
        /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
        **/
      Authorization: 'Basic ' + Buffer.from("92itCAzGQSyVpq6JcchF6A:7dTT78oPisi6Nzh6EyW5ambGP11N8qJP").toString('base64')
    }
  })
    .then(data => data.json())
    .then(data => data.access_token);
    const list = await fetch(endpoint, {
        method: 'GET',
        headers: {
          /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
          **/
        "Authorization": 'Bearer ' + token
        }
      })
      .then(data => data.json());
      console.log(token)
    console.log(list)
  } catch (err) {console.log(err)}
}

grabList();

