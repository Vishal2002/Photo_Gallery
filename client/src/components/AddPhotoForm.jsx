// AddPhotoForm.js
import React, { useState } from 'react';

function AddPhotoForm({ onAddPhoto }) {
  const [file, setFile] = useState(null);
  const [tag, setTag] = useState('nature'); // Set default value to 'nature'

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('tag', tag); // Include tag in the form data
    onAddPhoto(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-photo-form">
      <input type="file" onChange={handleFileChange} />
      <select value={tag} onChange={handleTagChange}> {/* Dropdown for tag selection */}
        <option value="nature">Nature</option>
        <option value="holidays">Holidays</option>
        <option value="events">Events</option>
      </select>
      <button type="submit">Add Photo</button>
    </form>
  );
}

export default AddPhotoForm;
