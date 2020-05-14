import { S3CONFIG } from '../../config';
import { S3 } from '../../redux/types/types';
// import { Image } from '../../dexie/tableClasses/image';
// const { S3Client } = require("@aws-sdk/client-s3-node/S3Client");
// const {
//   PutObjectCommand
// } = require("@aws-sdk/client-s3-node/commands/PutObjectCommand");

const AWS = require('aws-sdk'); // ../../../lib/aws-sdk-s3.js

const BUCKET_NAME = S3CONFIG.bucketName;
const IAM_USER_KEY = S3CONFIG.iamUser;
const IAM_USER_SECRET = S3CONFIG.iamSecret;
const BUCKET_REGION = S3CONFIG.bucketRegion;
const SIG_VERSION = S3CONFIG.SigVersion;

let s3bucket = new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
  Bucket: BUCKET_NAME,
  signatureVersion: SIG_VERSION,
  region: BUCKET_REGION,
});

const uploadToS3 = ({ key, body, ContentType, ContentEncoding, UPLOAD_TYPE, ERROR_TYPE, SUCCESS_TYPE }) => dispatch => {
  console.log('saga function: key, body, contentType in upload to S3:', [key, body]);
  console.log();
  return new Promise((resolve, reject) => {
    var S3params = {
      Bucket: BUCKET_NAME,
      Key: key,
      Body: body,
      ContentType: ContentType,
      ContentEncoding: ContentEncoding,
    };
    dispatch({ type: UPLOAD_TYPE });
    s3bucket.upload(S3params, (err, data) => {
      if (err) {
        console.log('error in callback');
        console.log(err);
        reject(err);
        resolve({ type: UPLOAD_TYPE, error: err });
      }
      console.log('S3Creators (Redux): Object response:', data);
      resolve({ type: SUCCESS_TYPE, data: data });
      console.log('Got this data in upload to S3, data:', data);
    });
  }).catch(error => {
    console.log('Promise Error in upload to S3:', error);
    dispatch({ type: ERROR_TYPE, error: error.message });
  });
};

// interface uploadImageToS3Type  { file: Image; url: string; placementName: string; };

export const uploadImageToS3 = (file, url, placementName): void => {
  console.log('upload URL:', `${url}/${placementName}`);
  uploadToS3({
    ContentEncoding: 'Base64',
    ContentType: file.mimes,
    key: `${url}/${file.name}`,
    body: file,
    UPLOAD_TYPE: S3.UPLOAD_S3_OBJECT,
    ERROR_TYPE: S3.UPLOAD_S3_OBJECT_ERROR,
    SUCCESS_TYPE: S3.UPLOAD_S3_OBJECT_SUCCESS,
  });
};
