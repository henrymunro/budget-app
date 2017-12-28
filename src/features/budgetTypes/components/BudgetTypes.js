// @flow

import React, { SyntheticEvent } from "react";
import type { BudgetType } from "../models/BudgetTypeContainer";
import FetchState from "common/reducerUtils/models/FetchState";
import SaveState from "common/reducerUtils/models/SaveState";

import "./BudgetTypes.css";

type Props = {
  newBudgetType: string,
  newBudgetSubType: string,
  budgetTypes: Array<BudgetType>,
  budgetTypesFetchState: FetchState,
  budgetTypesSaveState: SaveState,
  updateNewBudgetType: string => void,
  updateNewBudgetSubType: string => void,
  fetchBudgetTypes: () => void,
  saveNewBudgetType: () => void
};

export default class BudgetTypes extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetchBudgetTypes();
  }

  renderBudgetTypes = () => {
    const { budgetTypes } = this.props;
    return (
      <div>
        {budgetTypes &&
          budgetTypes.length > 0 &&
          budgetTypes.map(({ type, subType }, index) => (
            <div key={index}>
              <p>
                Type: {type}, SubType: {subType}
              </p>
            </div>
          ))}
      </div>
    );
  };

  _updateNewBudgetType = (e: SyntheticEvent) => {
    this.props.updateNewBudgetType(e.target.value);
  };
  _updateNewBudgetSubType = (e: SyntheticEvent) => {
    this.props.updateNewBudgetSubType(e.target.value);
  };
  render() {
    const {
      newBudgetType,
      newBudgetSubType,
      saveNewBudgetType,
      fetchBudgetTypes
    } = this.props;
    return (
      <div>
        <input
          type="text"
          value={newBudgetType || ""}
          onChange={this._updateNewBudgetType}
        />
        <input
          type="text"
          value={newBudgetSubType || ""}
          onChange={this._updateNewBudgetSubType}
        />
        <button onClick={saveNewBudgetType}>Save</button>
        <button onClick={fetchBudgetTypes}>Fetch</button>
        {this.renderBudgetTypes()}
      </div>
    );
  }
}
