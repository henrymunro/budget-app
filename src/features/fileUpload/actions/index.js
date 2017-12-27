// @flow

export const actionTypes = {
  PARSED_FILE: "fileUpload/PARSED_FILE",
  ERROR_PARSING_FILE: "fileUpload/ERROR_PARSING_FILE"
};

export function onFileParse(parsedFile: Array<Object>, fileDetails: Object) {
  return {
    type: actionTypes.PARSED_FILE,
    payload: { parsedFile, fileDetails }
  };
}

export function onFileParseError(error: string) {
  return {
    type: actionTypes.ERROR_PARSING_FILE,
    payload: { error }
  };
}
