// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from './components/Gallery';
import AddPhotoForm from './components/AddPhotoForm';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/photos/');
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const addPhoto = async (photoData) => {
    try {
      await axios.post('http://localhost:3001/photos/upload', photoData);
      fetchPhotos();
    } catch (error) {
      console.error('Error adding photo:', error);
    }
  };

  const deletePhoto = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/photos/delete/${id}`);
      fetchPhotos();
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  const updatePhoto = async (id, updatedData) => {
    try {
      await axios.post(`http://localhost:3001/photos/update/${id}`, updatedData);
      fetchPhotos();
    } catch (error) {
      console.error('Error updating photo:', error);
    }
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <AddPhotoForm onAddPhoto={addPhoto} />
      <Gallery photos={photos} onDeletePhoto={deletePhoto} onUpdatePhoto={updatePhoto} />
    </div>
  );
}

export default App;
