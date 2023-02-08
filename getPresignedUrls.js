const AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: process.env.Id,
    secretAccessKey: process.env.s_key,
    region: process.env.region
});
const s3 = new AWS.S3();

const bucket = process.env.bucket_name;
const object_key = "smaple.txt";
const expires = process.env.expiry_time;

const generateSignedUrl = async () => {
    const signedUrl = await s3.getSignedUrlPromise("getObject", {
        Bucket: bucket,
        Key: object_key,
        Expires: expires
    });
    return signedUrl;
}

// console.log(signedUrl);
generateSignedUrl().
then(signedUrl => console.log("signedUrl", signedUrl)).catch(err => {
    console.log("error", err)
});


