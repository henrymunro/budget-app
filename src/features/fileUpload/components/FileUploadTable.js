// @flow
import React from "react";
import moment from "moment";

import type { SaveFileEntryType } from "../models/SaveFileEntry";
import "./FileUploadTable.css";

type Props = {
  data: Array<SaveFileEntryType>
};

export default class FileUploadTable extends React.PureComponent<Props> {
  renderTableRows = () => {
    const { data } = this.props;
    const mappedRows = data.map(({ date, description, amount }, index) => (
      <tr key={`file-upload-table-row-${index}`}>
        <td>{moment(date).format("YYYY-MM-DD")}</td>
        <td>{description}</td>
        <td>{amount}</td>
      </tr>
    ));
    return mappedRows;
  };

  render() {
    return (
      <table className="FileUploadTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{this.renderTableRows()}</tbody>
      </table>
    );
  }
}
