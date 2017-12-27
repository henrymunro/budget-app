// @flow

import React from "react";
import ReactFileReader from "react-file-reader";
import parse from "csv-parse";

import { toCamelCase } from "common/utils";
import FileUploadTable from "./FileUploadTable";

import "./FileUpload.css";

type Props = {};

export default class FileUpload extends React.PureComponent<Props> {
  _handleFiles = files => {
    if (typeof FileReader !== "undefined") {
      var reader = new FileReader();
      reader.onload = readFile => {
        this._parseCsv(readFile.target.result);
      };

      reader.readAsText(files[0]);
    } else {
      alert("This browser does not support HTML5.");
    }
  };

  _parseCsv = file => {
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
        this.props.onFileParse(updatedParsedFile);
      }
    );
  };

  _renameKeys = obj => {
    const keyValues = Object.keys(obj).map(key => {
      const newKey = toCamelCase(key);
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  };

  render() {
    const { parsedFile } = this.props;
    return (
      <div>
        <ReactFileReader fileTypes={[".csv"]} handleFiles={this._handleFiles}>
          <button className="btn">Upload</button>
        </ReactFileReader>
        {parsedFile &&
          parsedFile.length > 0 && <FileUploadTable data={parsedFile} />}
      </div>
    );
  }
}
