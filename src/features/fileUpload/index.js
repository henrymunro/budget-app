// @flow
import FileUpload from "./containers/FileUploadContainer";
import type { SaveFileEntryType } from "./models/SaveFileEntry";

export { default as reducer } from "./reducers/fileUpload";
export type { SaveFileEntryType };
export default FileUpload;
