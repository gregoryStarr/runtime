import React, { useRef, useState } from "react";
import "./index.scss";
import { Segment } from "semantic-ui-react";
export function MultiUpload({ onFiles }) {
  const fileInput = useRef(null);
  const nameInput = useRef(null);
  const [files, setFiles] = useState([]);
  const [projectName, setProjectName] = useState("");

  const ref = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onFiles(projectName, files);
  };

  const getArrayFromFileList = (fileList) => {
    const tempArray = [];
    for (const file of files) {
      tempArray.push(file);
    }
    return tempArray;
  };

  const sanatize = (fileList) => {
    if (!fileList.length) return;
    let listString = "";
    fileList.map((file, index) => {
      return (listString += `${index++} ). ${
        file.name.substring(0, 20) + "..."
      } \r\n`);
    });
    return listString.replace(",", "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Segment>
        <input
          type="text"
          name="batchName"
          placeholder="Project Name"
          ref={nameInput}
          onChange={(e) => {
            setProjectName(e.currentTarget.value);
          }}
        />
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          value={sanatize(getArrayFromFileList())}
        />
        <input
          type="file"
          ref={fileInput}
          multiple
          onChange={(e) => {
            setFiles(e.currentTarget.files);
          }}
        />
        <button onClick={handleSubmit} type="submit" disabled={!files.length}>
          Submit
        </button>
      </Segment>
    </form>
  );
}
