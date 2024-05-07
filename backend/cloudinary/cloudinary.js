const cloudinary = require('cloudinary').v2; 
const config = require('../config')

let cloudinaryConfig; 

try { 
  cloudinaryConfig = require('../config')
} catch (error) {
  // if local config unavailable, use enviroment variables 
  cloudinaryConfig = {
    cloud_name: process.env.REACT_APP_CLOUD_NAME,
    api_key: process.env.REACT_APP_CLOUD_KEY,
    api_secret: process.env.REACT_APP_CLOUD_SECRET
  }; 
}
cloudinary.config({
  cloud_name: cloudinaryConfig.CLOUD_NAME,
  api_key: cloudinaryConfig.CLOUD_KEY,
  api_secret: cloudinaryConfig.CLOUD_SECRET,
  secure: true
});

// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });


module.exports = cloudinary