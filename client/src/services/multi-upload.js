import { S3 } from 'aws-sdk';

export const MultiUploadService = (files, success, error) => {

    const s3 = new S3({
        accessKeyId: 'AKIAWPBTC5FEJ2K7JNHS',
        secretAccessKey: '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',
        region: 'US West'
    });

    if (!files || files.length < 1) {
        error('Error: you need to provide an array of files')
    }

    const promises = files.map(file => {
        return s3.upload({
            Bucket: 'my-bucket',
            Key: file.name,
            Body: file
        }).promise();
    });

    Promise.all(promises).then(data => {
        console.log(data);
        success(data)
    }).catch(err => {
        console.error(err);
        error(err)
    });
}