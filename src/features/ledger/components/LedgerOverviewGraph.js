// @flow

import React from "react";

import { LineChart } from "../../graphs";
import "./LedgerOverviewGraph.css";

type Props = {
  groupedLedger: Array<any>
};

export default class LedgerOverviewGraph extends React.PureComponent<Props> {
  render() {
    const { groupedLedger } = this.props;
    console.log("HERE: ", { groupedLedger });
    return (
      <div>
        {groupedLedger &&
          groupedLedger.length > 0 && (
            <div>
              <h1>Grouped by type</h1>
              <LineChart
                data={groupedLedger}
                seriesKey="months"
                nameKey="month"
                valueKey="amount"
                seriesName="type"
              />
            </div>
          )}
      </div>
    );
  }
}
