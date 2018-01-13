// @flow

import React from "react";
import moment from "moment";

import type { LedgerType } from "../../../../backend/modules/database";
import Table from "features/common/table/components/Table";
import { findClosestId } from "common/utils";

type Props = {
  ledger: Array<LedgerType>,
  deleteLedgerEntry?: string => void
};

export default class LedgerTable extends React.PureComponent<Props> {
  _deleteLedgerEntry = (e: SyntheticEvent<HTMLDivElement>) => {
    const { deleteLedgerEntry } = this.props;
    if (!!deleteLedgerEntry && typeof deleteLedgerEntry === "function") {
      const _id = findClosestId(e);
      deleteLedgerEntry(_id);
    }
  };

  renderTableRows = () => {
    const { ledger } = this.props;
    const mappedRows = ledger.map(
      (
        {
          description,
          mappingAlias,
          userDescription,
          date,
          amount,
          type,
          subType,
          _id
        },
        index
      ) => (
        <tr key={index} data-id={_id} onClick={this._deleteLedgerEntry}>
          <td>{moment(date).format("YYYY-MM-DD")}</td>
          <td>
            {(userDescription || mappingAlias || description)
              .toLowerCase()
              .replace(/\b\w/g, l => l.toUpperCase())}
          </td>
          <td>{amount}</td>
          <td>{type && subType && `${type}, ${subType}`}</td>
        </tr>
      )
    );
    return mappedRows;
  };

  render() {
    const { ledger } = this.props;
    const thead = (
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Type</th>
      </tr>
    );
    return (
      <div>
        {ledger &&
          ledger.length > 0 && (
            <Table thead={thead}>{this.renderTableRows()}</Table>
          )}
      </div>
    );
  }
}
