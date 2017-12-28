// @flow
import { connect } from "react-redux";
// import uuid from "uuid/v1";

import { toJS } from "common/utils";

import {
  getSaveFile,
  getErrorParsingFile,
  getUploadedFiles,
  getUploadedFilesFetchState
} from "../selectors";

import {
  onFileParse,
  onFileParseError,
  fetchUploadedFiles,
  saveUploadedFile
} from "../actions";

import FileUpload from "../components/FileUpload";

const mapStateToProps = state => {
  return {
    saveFile: getSaveFile(state),
    errorParsingFile: getErrorParsingFile(state),
    uploadedFiles: getUploadedFiles(state),
    uploadedFilesFetchState: getUploadedFilesFetchState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFileParse: (parsedFile, fileDetails) =>
      dispatch(onFileParse(parsedFile, fileDetails)),
    onFileParseError: error => dispatch(onFileParseError(error)),
    fetchUploadedFiles: () => dispatch(fetchUploadedFiles()),
    saveUploadedFile: file => dispatch(saveUploadedFile(file))
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    saveUploadedFile: () => dispatchProps.saveUploadedFile(stateProps.saveFile)
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  toJS(FileUpload)
);
