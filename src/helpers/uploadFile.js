const cloudinary = require('cloudinary');
const path = require('path');
const { createWriteStream } = require('fs');

module.exports.uploadFile = async (filename, createReadStream) => {
  let filePath = '';

  await new Promise((res) => {
    filePath = createWriteStream(
      path.join(__dirname, '../../public', filename),
    ).path;
    return createReadStream()
      .pipe(createWriteStream(path.join(__dirname, '../../public', filename)))
      .on('close', res);
  });

  this.cloudinaryConfig();

  const file = await cloudinary.uploader.upload(filePath, (result) => result);

  return file;
};

module.exports.cloudinaryConfig = () =>
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });
