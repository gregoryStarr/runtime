import { useEffect, useState } from "react";
import "./index.scss";
import { MultiUpload } from "../multi-upload";
import { MultiUploadService } from "../../services/multi-upload";

const App = () => {
  // Flags
  const [UPLOAD_COMPLETE, setUploadComplete] = useState(false);
  const [IS_UPLOADING, setIsUploading] = useState(false);
  const [HAS_ERROR, setHasError] = useState(false);

  useEffect(()=>{},[])

  // Handlers
  function onFilesHandler(batchName, files) {
    if (!files.length) {
      const error = new Error("Please select files");

      setHasError(error.message);
      //throw(error)
    }

    if (!batchName) {
      batchName = `${files[0].name.split(".")[0]}-Project`;
    }

    const tempArray = [];
    for (const file of files) {
      tempArray.push(file);
    }

    // now call upload service
    uploadService(batchName, tempArray);
    setIsUploading(true);
  }


  const onBatchUploadSuccess = (data) => {
    setIsUploading(false);
    setUploadComplete(true);
    setHasError(false)
    console.log(`from batch success handler: ${JSON.stringify(data)}`);
  };

  const onBatchUploadError = (err) => {
    setHasError(err.message);
    console.log(`from batch error handler: ${err}`);
  };

  // instantiate the service
  const uploadService = (name, files) => {
    if (!files || !files.length  ) {
      const error = new Error("files have not been set properly");
      setHasError(error);
      return
    }

    if(!name){
        setHasError('Please provide and project name')
        return 
    }

    const uploadPath = name;
    setIsUploading(true);
    try {
       MultiUploadService(
        uploadPath,
        files,
        onBatchUploadSuccess,
        onBatchUploadError
      );
    } catch (error) {
      setHasError(error);
      setIsUploading(false);
      setUploadComplete(false)
    }
  };

  return (
    <div >
      <div>
        <section className="upload-container">
          UPLOAD YOUR FILES
          <MultiUpload onFiles={onFilesHandler} />
          {!UPLOAD_COMPLETE && !HAS_ERROR && IS_UPLOADING &&
            `{$Files.length} files have been selected, now uploading`}
          {HAS_ERROR && <div className="error">{HAS_ERROR}</div>}
          {UPLOAD_COMPLETE && <div className="success">Upload Complete</div>}
        </section>
      </div>
    </div>
  );
};

export default App;
