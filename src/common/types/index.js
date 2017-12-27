// @flow

import { Map } from "immutable";

import FileUpload from "seneca-common/features/fileUpload/models/FileUpload";

export type State = {
  fileUpload: Map<string, FileUpload>
};
