// Gallery.js
import React from 'react';
import PhotoCard from './PhotoCard';

function Gallery({ photos, onDeletePhoto, onUpdatePhoto }) {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <PhotoCard
          key={photo._id}
          photo={photo}
          onDelete={() => onDeletePhoto(photo._id)}
          onUpdate={(updatedData) => onUpdatePhoto(photo._id, updatedData)}
        />
      ))}
    </div>
  );
}

export default Gallery;
