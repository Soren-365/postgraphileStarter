import { S3CONFIG } from '../../config';
import { S3 } from '../../redux/types/types';

// const { S3Client } = require("@aws-sdk/client-s3-node/S3Client");
// const {
//   PutObjectCommand
// } = require("@aws-sdk/client-s3-node/commands/PutObjectCommand");

const AWS = require('aws-sdk'); // ../../../lib/aws-sdk-s3.js

const BUCKET_NAME = S3CONFIG.bucketName;
const IAM_USER_KEY = S3CONFIG.iamUser;
const IAM_USER_SECRET = S3CONFIG.iamSecret;

let s3bucket = new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
  Bucket: BUCKET_NAME,
});

const getObjectFromS3 = ({ url, name, GET_TYPE, ERROR_TYPE, SUCCESS_TYPE }) => {
  console.log('s3Creators function: "key" to getFromS3', [url, name]);
  console.log();
  return new Promise((resolve, reject) => {
    var S3params = {
      Bucket: BUCKET_NAME,
      Key: `${url}/${name}`,
    };
    s3bucket.getObject(S3params, (err, data) => {
      if (err) {
        console.log('error in callback');
        console.log(err);
        reject(err);
        resolve({ type: GET_TYPE, error: err });
      }
      console.log('S3Creators (Redux): Object response:', data);

      resolve({ type: SUCCESS_TYPE, data: data });
    });
  }).catch(error => {
    console.log('Promise Error in getFromS3:', error);
    console.log({ type: ERROR_TYPE, error: error.message });
  });
};

const uploadToS3 = ({ key, body, UPLOAD_TYPE, ERROR_TYPE, SUCCESS_TYPE }) => {
  console.log('saga function: key, body, contentType in upload to S3:', [key, body]);
  console.log();
  return new Promise((resolve, reject) => {
    var S3params = {
      Bucket: BUCKET_NAME,
      Key: key,
      Body: body,
    };
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
    console.log({ type: ERROR_TYPE, error: error.message });
  });
};

type getImageFromS3Type = { url: string; name: string };

export const getDirectImageFromS3 = ({
  url = 'agencies/agency_1/destinations/destination_1/images/main_image',
  name = '5829e942dd0895586d8b45ae.png',
}: getImageFromS3Type) =>
  getObjectFromS3({
    url,
    name,
    GET_TYPE: S3.GET_S3_OBJECT,
    ERROR_TYPE: S3.GET_S3_OBJECT_ERROR,
    SUCCESS_TYPE: S3.GET_S3_OBJECT_SUCCESS,
  });

// type BuploadImageToS3Type = { url: string; name: string, data: string, mimetype: string };

// export const BuploadImageToS3 = ({
// url, name,  data, mimetype
// }: BuploadImageToS3Type) =>
//   BuploadToS3({
//     url,
//     name,
//     data,
//     mimetype,
//     UPLOAD_S3_OBJECT: S3.UPLOAD_S3_OBJECT,
//     UPLOAD_S3_OBJECT_ERROR: S3.UPLOAD_S3_OBJECT_ERROR,
//     UPLOAD_S3_OBJECT_SUCCESS: S3.UPLOAD_S3_OBJECT_SUCCESS,
//   });

type uploadImageToS3Type = { file: Blob };
export const uploadImageToS3 = ({ file }: uploadImageToS3Type) =>
  uploadToS3({
    key: `agencies/agency_1/destinations/destination_1/images/third_image`, ///${file.name}
    body: file,
    UPLOAD_TYPE: S3.UPLOAD_S3_OBJECT,
    ERROR_TYPE: S3.UPLOAD_S3_OBJECT_ERROR,
    SUCCESS_TYPE: S3.UPLOAD_S3_OBJECT_SUCCESS,
  });
