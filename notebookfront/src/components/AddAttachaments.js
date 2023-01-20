import React, { useState } from 'react';

function AddAttachaments() {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // cod pentru a încărca fișierul selectat pe server sau în stocarea cloud
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch('/server/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adaugă atașament:
        <input type="file" onChange={handleChange} />
      </label>
      <input type="submit" value="Încarcă" />
    </form>
  );
}

export default AddAttachaments;