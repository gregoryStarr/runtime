import React, { useRef, useState } from "react";
import "./index.css";
export function MultiUpload({ onFiles }) {
  const fileInput = useRef(null);
  const nameInput = useRef(null);
  const [files, setFiles] = useState([])


  const handleFileSelection = (event) => {
    setFiles(fileInput.current.files);
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    const name = nameInput.current.value;
    onFiles(name,files);
  }

  const getArrayFromFileList = (fileList) =>{
    const tempArray = [];
    for (const file of files) {
      tempArray.push(file);
    }
    return tempArray;
  }

  const sanatize = (fileList) => {
    if(!fileList.length) return;
    let listString = ''
    fileList.map((file, index)=> { return listString+=`${index++} ). ${file.name.substring(0,20)+"..."} \r\n`}) 
    return listString.replace(",","");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="batchName" placeholder="Project Name" ref={nameInput} />
      <textarea id="story" name="story"
          rows="5"
          cols="33" 
          value={sanatize(getArrayFromFileList())} 
          />
      <input type="file" ref={fileInput} multiple  onChange={handleFileSelection}/>
      <button type="submit" disabled={!files.length}>Submit</button>
    </form>
  );
}
