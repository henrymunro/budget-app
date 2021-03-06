// @flow

export type FileUploadContentsType = {
  _fileUploadId: string,
  date: Date,
  description: string,
  mappingAlias?: string,
  type?: string,
  subType?: string,
  _typeId?: string,
  amount: number,
  otherDetails: Object
};
