// @flow

import React from "react";
import ReactFileReader from "react-file-reader";
import parse from "csv-parse/lib";

import UploadedFileEntry from "../models/UploadedFileEntry";
import SaveFile from "../models/SaveFile";

import { toCamelCase } from "common/utils";
import FileUploadTable from "./FileUploadTable";

import "./FileUpload.css";

type Props = {
  saveFile: SaveFile,
  onFileParse: (Array<UploadedFileEntry>, File) => void,
  onFileParseError: string => void,
  fetchUploadedFiles: () => void,
  saveUploadedFile: () => void
};

export default class FileUpload extends React.PureComponent<Props> {
  _handleFiles = (files: FileList) => {
    const {
      name,
      lastModified,
      lastModifiedDate,
      size,
      type,
      webkitRelativePath
    } = files[0];

    // Read and parse file
    if (typeof FileReader !== "undefined") {
      var reader = new FileReader();
      reader.onload = readFile => {
        this._parseCsv(readFile.target.result, {
          name,
          lastModified,
          lastModifiedDate,
          size,
          type,
          webkitRelativePath
        });
      };

      reader.readAsText(files[0]);
    } else {
      alert("This browser does not support HTML5.");
    }
  };

  _parseCsv = (file: string, fileDetails: Object) => {
    parse(
      file,
      {
        columns: true,
        auto_parse: true,
        auto_parse_date: true,
        skip_empty_lines: true
      },
      (err, parsedFile) => {
        if (err) {
          console.error("Error parsing file: ", err);
          return this.props.onFileParseError(err);
        }
        const updatedParsedFile = parsedFile.map(entry =>
          this._renameKeys(entry)
        );
        this.props.onFileParse(updatedParsedFile, fileDetails);
      }
    );
  };

  _renameKeys = (obj: Object) => {
    const keyValues = Object.keys(obj).map(key => {
      const newKey = toCamelCase(key);
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  };

  render() {
    const { saveFile } = this.props;
    console.log(this.props);
    return (
      <div>
        <ReactFileReader fileTypes={[".csv"]} handleFiles={this._handleFiles}>
          <button className="btn">Upload</button>
        </ReactFileReader>
        <button onClick={() => this.props.fetchUploadedFiles()}>
          GET UPLOADED FILES
        </button>
        <button onClick={() => this.props.saveUploadedFile()}>
          SAVE UPLOADED FILES
        </button>
        {saveFile &&
          saveFile.content.length > 0 && (
            <FileUploadTable data={saveFile.content} />
          )}
      </div>
    );
  }
}
