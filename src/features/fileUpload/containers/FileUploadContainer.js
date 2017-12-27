// @flow
import { connect } from "react-redux";
// import uuid from "uuid/v1";

import { toJS } from "common/utils";

import { getParsedFile, getErrorParsingFile } from "../selectors";

import { onFileParse, onFileParseError } from "../actions";

import FileUpload from "../components/FileUpload";

const mapStateToProps = state => {
  return {
    parsedFile: getParsedFile(state),
    errorParsingFile: getErrorParsingFile(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFileParse: parsedFile => dispatch(onFileParse(parsedFile)),
    onFileParseError: error => dispatch(onFileParseError(error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(FileUpload));
