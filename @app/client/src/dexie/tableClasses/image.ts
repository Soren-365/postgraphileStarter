const DEFAULT_PROPERTIES = {
  mime: 'fileformat is default',
  file: { type: 'type is default', data: [0] },
};

export class Image {
  public mime: string;
  public file: { type: string; data: number };

  constructor({ mime, file }: { mime; file }) {
    // Object.assign(this, data);
    this.mime = mime || DEFAULT_PROPERTIES.mime;
    this.file = file || DEFAULT_PROPERTIES.file;
  }
  // method() {}
}
