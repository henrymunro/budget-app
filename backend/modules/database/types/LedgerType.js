// @flow

export type LedgerType = {
  _fileUploadId: string,
  _typeId?: string,
  date: Date,
  description: string,
  mappingAlias?: string,
  userDescription?: string,
  amount: number,
  type?: string,
  subType?: string,
  otherDetails: Object
};
