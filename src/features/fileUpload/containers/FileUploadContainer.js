// @flow
import { connect } from "react-redux";
// import uuid from "uuid/v1";

import { toJS } from "common/utils";

import { getParsedFile, getSaveFile, getErrorParsingFile } from "../selectors";

import { onFileParse, onFileParseError } from "../actions";

import FileUpload from "../components/FileUpload";

const mapStateToProps = state => {
  return {
    saveFile: getSaveFile(state),
    errorParsingFile: getErrorParsingFile(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFileParse: (parsedFile, fileDetails) =>
      dispatch(onFileParse(parsedFile, fileDetails)),
    onFileParseError: error => dispatch(onFileParseError(error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(FileUpload));
