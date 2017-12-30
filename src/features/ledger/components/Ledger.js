// @flow

import React from "react";

import type { LedgerType } from "../../../../backend/modules/database";
import LedgerTable from "./LedgerTable";

import "./Ledger.css";

type Props = {
  ledger: Array<LedgerType>,
  fetchLedger: () => void
};

export default class Ledger extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetchLedger();
  }

  render() {
    const { ledger } = this.props;
    return (
      <div>
        <p>Ledger</p>
        <LedgerTable ledger={ledger} />
      </div>
    );
  }
}
