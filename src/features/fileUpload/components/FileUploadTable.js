// @flow
import React from "react";
import moment from "moment";

import type { LedgerType } from "../../../../backend/modules/database";
import "./FileUploadTable.css";

type Props = {
  data: Array<LedgerType>
};

export default class FileUploadTable extends React.PureComponent<Props> {
  renderTableRows = () => {
    const { data } = this.props;

    const mappedRows = data.map(
      ({ date, description, mappingAlias, type, subType, amount }, index) => (
        <tr key={`file-upload-table-row-${index}`}>
          <td>{moment(date).format("YYYY-MM-DD")}</td>
          <td>{description}</td>
          <td>{mappingAlias}</td>
          <td>{type && subType && `${type}, ${subType}`}</td>
          <td>{amount}</td>
        </tr>
      )
    );
    return mappedRows;
  };

  render() {
    return (
      <div>
        <table className="FileUploadTable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Mapping</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
      </div>
    );
  }
}
