// PhotoCard.js
import React, { useState } from 'react';

function PhotoCard({ photo, onDelete, onUpdate }) {

  const handleUpdate = () => {
    onUpdate({ tag });
  };

  return (
    <div className="photo-card">
    <img src={photo.picUrl} alt={photo._id} />
    <input type="text" style={{color:'black'}} value={photo.tag} readOnly />
    <button onClick={handleUpdate}>Update</button>
    <button onClick={onDelete}>Delete</button>
  </div>
  );
}

export default PhotoCard;
