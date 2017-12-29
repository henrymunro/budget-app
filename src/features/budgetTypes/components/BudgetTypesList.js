// @flow

import React from "react";

import type { GroupedBudgetTypesType } from "../models/BudgetTypeContainer";
import DeleteIcon from "features/common/buttons/components/DeleteIcon";
import { findClosestId } from "common/utils";

import "./BudgetTypesList.css";

type Props = {
  budgetTypes: Array<GroupedBudgetTypesType>,
  deleteBudgetType?: string => void,
  handleTypeClick?: string => void
};

export default class BudgetTypesList extends React.PureComponent<Props> {
  _deleteBudgetType = (e: SyntheticEvent<HTMLDivElement>) => {
    const { deleteBudgetType } = this.props;
    if (!!deleteBudgetType && typeof deleteBudgetType === "function") {
      const _id = findClosestId(e);
      e.stopPropagation();
      deleteBudgetType(_id);
    }
  };

  _handleClick = (e: SyntheticEvent<HTMLDivElement>) => {
    const { handleTypeClick } = this.props;
    if (!!handleTypeClick && typeof handleTypeClick === "function") {
      const _id = findClosestId(e);
      handleTypeClick(_id);
    }
  };

  renderBudgetTypes = () => {
    const { budgetTypes, deleteBudgetType } = this.props;

    return (
      <div className="BudgetTypeList">
        {budgetTypes.map((item: GroupedBudgetTypesType, index) => {
          const { type, subTypes } = item;
          return (
            <div className="BudgetTypesList__row">
              <div className="BudgetTypeList__type">{type}</div>
              <div className="BudgetTypeList__subTypes">
                {subTypes.map(({ subType, _id }, index) => {
                  return (
                    <div
                      className="BudgetTypeList__subType"
                      data-id={_id}
                      onClick={this._handleClick}
                    >
                      <span>{subType}</span>
                      {deleteBudgetType && (
                        <span onClick={this._deleteBudgetType} data-id={_id}>
                          <DeleteIcon />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
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
