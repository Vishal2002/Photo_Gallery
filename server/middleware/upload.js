const multer = require('multer');
const multerS3 = require("multer-s3");
const { AWS } = require('../services/service');
require('dotenv').config();
const upload = multer({
  storage: multerS3({
    s3: AWS,
    bucket: process.env.BUCKET,
    key: function (req, file, cb) {
      cb(null, `upload/Pictures/${file.originalname}`);
    },
  }),
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed!"), false);
    }
  },
});

module.exports = {upload};
