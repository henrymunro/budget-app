// @flow

import React from "react";

import type { LedgerType } from "../../../../backend/modules/database";
import type { LedgerGroupedByMonthType } from "../models/LedgerContainer";
import LedgerTable from "./LedgerTable";
import LedgerGroupedByMonth from "./LedgerGroupedByMonth";
import LedgerOverviewGraph from "./LedgerOverviewGraph";

import "./Ledger.css";

type Props = {
  ledger: Array<LedgerType>,
  ledgerGroupedByMonth: Array<LedgerGroupedByMonthType>,
  ledgerGroupedByType: Array<any>,
  fetchLedger: () => void
};

export default class Ledger extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetchLedger();
  }

  render() {
    const { ledger, ledgerGroupedByMonth, ledgerGroupedByType } = this.props;
    return (
      <div>
        <p>Ledger</p>
        <LedgerOverviewGraph groupedLedger={ledgerGroupedByType} />
        <LedgerGroupedByMonth groupedLedger={ledgerGroupedByMonth} />
        <LedgerTable ledger={ledger} />
      </div>
    );
  }
}
