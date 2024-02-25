const photo = require('../db/db'); 
const {deleteFromS3}=require('../services/service');
async function getImage(req, res) {
  try {
    const images = await photo.find(); 
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function uploadImage(req, res) {
  try {
   
    const { location } = req.file;
    const newPhoto = new photo({
      picUrl: location, 
      tag: req.body.tag 
    });
    await newPhoto.save(); 
    res.status(201).json(newPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteImage(req, res) {
  try {
    const { id } = req.params; 
    const deletedPhoto = await photo.findByIdAndDelete(id);
    const picUrl = deletedPhoto.picUrl;
    await deleteFromS3(picUrl);
    res.status(200).json({message:`Deleted Succesfully`});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateImage(req, res) {
  try {
    const { id } = req.params;
    const { tag } = req.body;
    const updatedPhoto = await photo.findByIdAndUpdate(id, { tag }, { new: true });
    res.json(updatedPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getImage,
  deleteImage,
  updateImage,
  uploadImage
};
