import AWS, { S3 } from "aws-sdk";

export const MultiUploadService = async (
  uploadPath = "",
  files = [],
  success = null,
  error = null
) => {

  const s3 = new S3({
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET,
    },
    region: "us-west-2",
    profile: "uswestAdmin",
  });

  const defaultResponseHandler = (response) => {
    console.log(`DEFAULT RESPONSE MESSAGING: ${response}`);
  };

  if (!files || files.length < 1) {
    error("Error: you need to provide an array of files");
  }

  if (success == null) {
    success = defaultResponseHandler;
  }

  if (error == null) {
    success = defaultResponseHandler;
  }

  // create the promises
  const promises = files.map((file) => {
    return s3
      .upload({
        Bucket: "photogammetry",
        Key: `${uploadPath}/${file.name}`,
        Body: file,
      })
      .promise();
  });

  // execute the promises
  Promise.all(promises)
    .then((data) => {
      success(data);
    })
    .catch((err) => {
      console.error(err);
      error(err);
    });
};