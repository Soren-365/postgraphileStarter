import { placeholderS3ObjectType } from 'src/redux/reducers/s3';

import { Image } from '../dexie/tableClasses/image';

export default function getImageFromS3Fetch(fetchobject: placeholderS3ObjectType): Image {
  const importedImageObject = new Image({
    mime: fetchobject.ContentType = 'defMimeType',
    file: { type: fetchobject.ContentEncoding = 'defContentEncoding', data: fetchobject.Body = [0] },
  });
  console.log('importedImageObject', importedImageObject);
  return importedImageObject;
}
