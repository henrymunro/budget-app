// @flow

import React from "react";

import type { LedgerType } from "../../../../backend/modules/database";
import type { LedgerGroupedByMonthType } from "../models/LedgerContainer";
import LedgerTable from "./LedgerTable";
import LedgerGroupedByMonth from "./LedgerGroupedByMonth";

import "./Ledger.css";

type Props = {
  ledger: Array<LedgerType>,
  ledgerGroupedByMonth: Array<LedgerGroupedByMonthType>,
  fetchLedger: () => void
};

export default class Ledger extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetchLedger();
  }

  render() {
    const { ledger, ledgerGroupedByMonth } = this.props;
    return (
      <div>
        <p>Ledger</p>
        <LedgerGroupedByMonth groupedLedger={ledgerGroupedByMonth} />
        <LedgerTable ledger={ledger} />
      </div>
    );
  }
}
