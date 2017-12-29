// @flow

import * as React from "react";
import type { GroupedBudgetTypesType } from "../models/BudgetTypeContainer";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";
import BudgetTypesList from "./BudgetTypesList";

import "./BudgetTypes.css";

type Props = {
  newBudgetType: string,
  newBudgetSubType: string,
  budgetTypes: Array<GroupedBudgetTypesType>,
  budgetTypesCRUDState: WebApiCRUDState,
  updateNewBudgetType: string => void,
  updateNewBudgetSubType: string => void,
  fetchBudgetTypes: () => void,
  saveNewBudgetType: () => void,
  deleteBudgetType: string => void,
  updateBudgetType: ({ _id: string }) => void
};

export default class BudgetTypes extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetchBudgetTypes();
  }

  _updateNewBudgetType = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.updateNewBudgetType(e.target.value);
  };
  _updateNewBudgetSubType = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.updateNewBudgetSubType(e.target.value);
  };
  render() {
    const {
      budgetTypes,
      deleteBudgetType,
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
        <BudgetTypesList
          budgetTypes={budgetTypes}
          deleteBudgetType={deleteBudgetType}
        />
      </div>
    );
  }
}
