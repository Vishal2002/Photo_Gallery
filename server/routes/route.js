const express = require('express');
require('dotenv').config();
const {getImage , uploadImage ,deleteImage ,updateImage} = require('../controller/controller')
const {upload}=require('../middleware/upload');
const router= express.Router();

router.route('/').get(getImage);
router.route('/upload').post(upload.single('image'),uploadImage);
router.route('/delete/:id').delete(deleteImage);
router.route('/update/:id').put(updateImage);  // This is nothing but delete and then upload


module.exports = router;