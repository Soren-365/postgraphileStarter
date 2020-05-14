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
const BUCKET_REGION = S3CONFIG.bucketRegion;
const SIG_VERSION = S3CONFIG.SigVersion;

let s3bucket = new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
  Bucket: BUCKET_NAME,
  signatureVersion: SIG_VERSION,
  region: BUCKET_REGION,
});

const getSignedUrlPromise = ({ expires, url, name, GET_TYPE, ERROR_TYPE, SUCCESS_TYPE }) => {
  console.log('s3Creators function: "key" to getFromS3', [url, name]);
  console.log();
  return new Promise((resolve, reject) => {
    var S3params = {
      Bucket: BUCKET_NAME,
      Key: `${url}/${name}`,
      Expires: expires,
    };
    s3bucket.getSignedUrlPromise('getObject', S3params, (err, data) => {
      if (err) {
        console.log('error in callback');
        console.log(err);
        reject(err);
        resolve({ type: GET_TYPE, error: err });
      }
      console.log('S3Creators (Redux): getSignedUrl response:', data);

      resolve({ type: SUCCESS_TYPE, url: data });
    });
  }).catch(error => {
    console.log('Promise Error in getFromS3:', error);
    console.log({ type: ERROR_TYPE, error: error.message });
  });
};

type getImageFromS3Type = { url: string; name: string; expires: number };

export const getSignedUrlFromS3 = ({
  url = 'agencies/agency_1/destinations/destination_1/images/main_image',
  name = '5829e942dd0895586d8b45ae.png',
  expires = 604800,
}: getImageFromS3Type) =>
  getSignedUrlPromise({
    expires,
    url,
    name,
    GET_TYPE: S3.GET_S3_URL,
    ERROR_TYPE: S3.GET_S3_URL_ERROR,
    SUCCESS_TYPE: S3.GET_S3_URL_SUCCESS,
  });
