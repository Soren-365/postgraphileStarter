import { S3 } from "../types/types";

export const loadStates = {
  loading: "loading",
  error: "error",
  success: "success",
  saga: "Saga processing",
};

export const s3store = {
  status: undefined,
  error: undefined,
  placeholderS3Object: undefined,
  placeholderS3Component: undefined,
  placeholderS3Url: { url: "http://localhost:4202/static/images/Als43_S.jpg" },
  placeholderS3Name: undefined,
};

export type S3StoreType = {
  status: string | undefined;
  error: string | undefined;
  placeholderS3Object: placeholderS3ObjectType | undefined;
  placeholderS3Component: object | undefined;
  placeholderS3Url: { url: string | undefined };
  placeholderS3Name: string | undefined;
};

export interface placeholderS3ObjectType {
  AcceptRanges: string;
  LastModified: string;
  ContentLength: string;
  ETag: string;
  ContentEncoding: string;
  ContentType: string;
  Metadata: object;
  Body: number[];
}

const s3 = (
  state = s3store,
  s3: {
    type: any;
    data: any;
    error: any;
    url: any;
    name: any;
    object: any;
    component: any;
  }
): S3StoreType => {
  switch (s3.type) {
    case S3.GET_S3_OBJECT:
      return {
        ...state,
        ...{ status: loadStates.loading },
      };

    case S3.GET_S3_OBJECT_SUCCESS:
      return {
        ...state,
        ...{ status: loadStates.success, placeholderS3Object: s3.data },
      };

    case S3.GET_S3_OBJECT_ERROR:
      return {
        ...state,
        ...{ status: loadStates.error, error: s3.error },
      };

    case S3.GET_S3_URL:
      return {
        ...state,
        ...{ status: loadStates.loading },
      };

    case S3.GET_S3_URL_SUCCESS:
      return {
        ...state,
        ...{ status: loadStates.success, placeholderS3URL: { url: s3.data } },
      };

    case S3.GET_S3_URL_ERROR:
      return {
        ...state,
        ...{ status: loadStates.error, error: s3.error },
      };

    case S3.UPLOAD_S3_OBJECT:
      return {
        ...state,
        ...{ status: loadStates.loading },
      };

    case S3.UPLOAD_S3_OBJECT_SUCCESS:
      return {
        ...state,
        ...{ status: loadStates.success },
      };

    case S3.UPLOAD_S3_OBJECT_ERROR:
      return {
        ...state,
        ...{ status: loadStates.error, error: s3.error },
      };

    case S3.LOAD_S3_OBJECT_REQUEST:
      return {
        ...state,
        ...{
          status: loadStates.saga,
          placeholderS3Url: s3.url,
          placeholderS3Name: s3.name,
        },
      };

    case S3.LOAD_S3_OBJECT_SUCCESS:
      return {
        ...state,
        ...{
          status: loadStates.success,
          placeholderS3Object: s3.object,
          placeholderS3Component: s3.component,
        },
      };

    case S3.UPLOAD_S3_OBJECT_REQUEST:
      return {
        ...state,
        ...{ status: loadStates.saga },
      };

    case S3.UPLOAD_S3_OBJECT_SUCCESS:
      return {
        ...state,
        ...{ status: loadStates.success },
      };

    default:
      return state;
  }
};

export default s3;
