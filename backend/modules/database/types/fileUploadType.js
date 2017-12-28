// @flow

import type { FileUploadContentsType } from "./fileUploadContentsType";

export type FileUploadType = {
  currency: "£" | "$",
  uploadTime: Date,
  tags: Array<string>,
  fileName: string,
  fileType: string,
  lastModifiedDate: Date,
  otherDetails: File
};

export type RecievedFileUploadType = FileUploadType & {
  content: Array<FileUploadContentsType>
};
