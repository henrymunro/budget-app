// @flow
import { connect } from "react-redux";
// import uuid from "uuid/v1";

import { toJS } from "common/utils";

import {
  getSaveFile,
  getErrorParsingFile,
  getUploadedFiles,
  getUploadedFilesCRUDState
} from "../selectors";

import {
  onFileParse,
  onFileParseError,
  uploadedFilesCRUDActions
} from "../actions";

import { fetchMappings, getMappings } from "../../mappings";

import FileUpload from "../components/FileUpload";

const mapStateToProps = state => {
  return {
    saveFile: getSaveFile(state),
    errorParsingFile: getErrorParsingFile(state),
    uploadedFiles: getUploadedFiles(state),
    uploadedFilesCRUDState: getUploadedFilesCRUDState(state),
    mappings: getMappings(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFileParse: (parsedFile, fileDetails, mappings) =>
      dispatch(onFileParse(parsedFile, fileDetails, mappings)),
    onFileParseError: error => dispatch(onFileParseError(error)),
    fetchUploadedFiles: () => dispatch(uploadedFilesCRUDActions.fetchAction()),
    saveUploadedFile: file =>
      dispatch(uploadedFilesCRUDActions.saveAction(file)),
    fetchMappings: async () => dispatch(fetchMappings())
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    saveUploadedFile: () => dispatchProps.saveUploadedFile(stateProps.saveFile),
    onFileParse: async (parsedFile, fileDetails) => {
      // Check to see if mappings exist in state
      const stateMappings = stateProps.mappings.toJS();
      let mappings = stateMappings;
      // If not fetch from the server
      if (stateMappings.length === 0) {
        const { action } = await dispatchProps.fetchMappings();
        mappings = action.payload.data;
      }
      dispatchProps.onFileParse(parsedFile, fileDetails, mappings);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  toJS(FileUpload)
);
