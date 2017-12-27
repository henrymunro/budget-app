// @flow
import React from "react";
import moment from "moment";

import type { FileUploadEntryType } from "../models/FileUploadEntry";
import "./FileUploadTable.css";

type Props = {
  data: Array<FileUploadEntryType>
};

export default class FileUploadTable extends React.PureComponent<Props> {
  renderTableRows = () => {
    const { data } = this.props;
    const mappedRows = data.map(
      (
        { balance, date, description, paidIn, paidOut, transactionType },
        index
      ) => (
        <tr key={`file-upload-table-row-${index}`}>
          <td>{balance}</td>
          <td>{moment(date).format("YYYY-MM-DD")}</td>
          <td>{String(description)}</td>
          <td>{paidIn}</td>
          <td>{paidOut}</td>
          <td>{transactionType}</td>
        </tr>
      )
    );
    console.log({ mappedRows });
    return mappedRows;
  };

  render() {
    return (
      <table className="FileUploadTable">
        <thead>
          <tr>
            <th>Balance</th>
            <th>Date</th>
            <th>Description</th>
            <th>Paid In</th>
            <th>Paid Out</th>
            <th>Transaction Type</th>
          </tr>
        </thead>
        <tbody>{this.renderTableRows()}</tbody>
      </table>
    );
  }
}
