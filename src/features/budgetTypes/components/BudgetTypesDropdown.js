// @flow

import React from "react";
import classNames from "classnames";

import type {
  BudgetTypeType,
  GroupedBudgetTypesType
} from "../models/BudgetTypeContainer";
import BudgetTypesList from "./BudgetTypesList";

import "./BudgetTypeDropdown.css";

type Props = {
  budgetType?: BudgetTypeType,
  budgetTypes: Array<GroupedBudgetTypesType>,
  handleTypeClick: string => void
};

type State = {
  expanded: boolean
};

export default class BudgetTypesDropdown extends React.PureComponent<
  Props,
  State
> {
  state = {
    expanded: false
  };

  componentWillMount() {
    window.addEventListener("click", () => this._collapseList);
  }

  componentWillUnmount() {
    window.addEventListener("click", () => this._collapseList);
  }

  _expandedList = () => {
    this.setState({ expanded: true });
  };

  _collapseList = () => {
    this.setState({ expanded: false });
  };

  _handleTypeClick = (_id: string) => {
    this._collapseList();
    this.props.handleTypeClick(_id);
  };

  renderBudgetTypes = () => {
    const { budgetTypes, budgetType } = this.props;
    const { expanded } = this.state;

    const dropdownClass = classNames({
      BudgetTypeDropdown__types: true,
      "BudgetTypeDropdown__types--expanded": expanded,
      "BudgetTypeDropdown__types--collapsed": !expanded
    });
    return (
      <div className="BudgetTypeDropdown">
        <div className="BudgetTypeDropdown__type" onClick={this._expandedList}>
          {budgetType && budgetType.type ? (
            <div>
              {budgetType.type}, {budgetType.subType}
            </div>
          ) : (
            <div>Please select a type</div>
          )}
        </div>

        <div className={dropdownClass}>
          <BudgetTypesList
            budgetTypes={budgetTypes}
            handleTypeClick={this._handleTypeClick}
          />
        </div>
      </div>
    );
  };

  render() {
    const { budgetTypes } = this.props;
    return (
      <div>
        {budgetTypes && budgetTypes.length > 0 && this.renderBudgetTypes()}
      </div>
    );
  }
}
