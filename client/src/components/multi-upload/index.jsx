import React, { useRef } from 'react';

export function MultiUpload(onFiles) {
  const fileInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const files = fileInput.current.files;
    onFiles(files);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileInput} multiple />
      <button type="submit">Submit</button>
    </form>
  );
}
