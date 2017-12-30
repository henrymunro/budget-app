// @flow

import React from "react";

import type { LedgerGroupedByMonthType } from "../models/LedgerContainer";

import "./LedgerGroupedByMonth.css";

type Props = {
  groupedLedger: Array<LedgerGroupedByMonthType>
};

export default class LedgerGroupedByMonth extends React.PureComponent<Props> {
  render() {
    const { groupedLedger } = this.props;
    console.log("HERE: ", { groupedLedger });
    return (
      <div>
        {groupedLedger &&
          groupedLedger.length > 0 && (
            <div>
              <h1>Grouped by month</h1>
              <div className="LedgerMonthGroup">
                {groupedLedger.map((ledgerMonth, index) => {
                  const { month, amount, types, items } = ledgerMonth;
                  return (
                    <div className="LedgerMonthGroup__row" key={index}>
                      <div className="LedgerMonthGroup__month">
                        <h3>{month}</h3>
                        <p>{`£${-1 * Math.round(amount)}  Count: ${
                          items.length
                        }`}</p>
                      </div>
                      <div className="LedgerMonthGroup__types">
                        {types.map((type, typeIndex) => {
                          return (
                            <div
                              className="LedgerMonthGroup__type"
                              key={typeIndex}
                            >
                              <p>{`${type.type}    £${-1 *
                                Math.round(type.amount)}  Count: ${
                                type.items.length
                              }`}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
      </div>
    );
  }
}
