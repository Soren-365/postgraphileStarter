import { S3CONFIG } from '../../../config';
import { S3 } from '../../types/types';

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

const getObjectFromS3 = ({ url, name, GET_TYPE, ERROR_TYPE, SUCCESS_TYPE }) => dispatch => {
  console.log('s3Creators function: "key" to getFromS3', [url, name]);
  console.log();
  return new Promise((resolve, reject) => {
    var S3params = {
      Bucket: BUCKET_NAME,
      Key: `${url}/${name}`,
    };
    dispatch({ type: GET_TYPE });
    s3bucket.getObject(S3params, (err, data) => {
      if (err) {
        console.log('error in callback');
        console.log(err);
        reject(err);
        resolve({ type: ERROR_TYPE, error: err });
      }
      console.log('S3Creators (Redux): Object response:', data);
      resolve({ type: SUCCESS_TYPE, data: data });
    });
  }).catch(error => {
    console.log('Promise Error in getFromS3:', error);
    dispatch({ type: ERROR_TYPE, error: error.message });
  });
};

const uploadToS3 = ({ key, body, UPLOAD_TYPE, ERROR_TYPE, SUCCESS_TYPE }) => dispatch => {
  console.log('saga function: key, body, contentType in upload to S3:', [key, body]);
  console.log();
  return new Promise((resolve, reject) => {
    var S3params = {
      Bucket: BUCKET_NAME,
      Key: key,
      Body: body,
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

type getImageFromS3Type = { url: string; name: string };

export const getImageFromS3 = ({
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

type uploadImageToS3Type = { file: Blob; amazonUrl: string };
export const uploadImageToS3 = ({ file, amazonUrl }: uploadImageToS3Type) =>
  uploadToS3({
    key: amazonUrl, ///${file.name}
    body: file,
    UPLOAD_TYPE: S3.UPLOAD_S3_OBJECT,
    ERROR_TYPE: S3.UPLOAD_S3_OBJECT_ERROR,
    SUCCESS_TYPE: S3.UPLOAD_S3_OBJECT_SUCCESS,
  });

// export const fetchFromS3 = ({ endpoint, options, FETCH_TYPE, ERROR_TYPE, SUCCESS_TYPE }) => dispatch => {

//    // console.log("fectch address: ", `${BACKEND.ADDRESS}/account/${endpoint}`)
//     console.log("accountCreators (Redux):", [ endpoint, options.body])
//     dispatch({ type: FETCH_TYPE })
//     return fetch(`${BACKEND.ADDRESS}/account/${endpoint}`, options).then(response => response.json())
//         .then(json => {
//             if (json.type === 'error') {
//                 dispatch({ type: ERROR_TYPE, message: json.message })
//             } else {
//                 dispatch({ type: SUCCESS_TYPE, ...json })
//                 console.log("accountCreators (Redux): Fetch response body (json):", json)
//             }
//         })
//         .catch(error => dispatch({
//             type: ERROR_TYPE, message: error.message
//         }))
// }

export const loadS3Object_ = ({ url, name }) => dispatch => {
  dispatch({ type: S3.LOAD_S3_OBJECT_REQUEST, url: url, name: name });
};
