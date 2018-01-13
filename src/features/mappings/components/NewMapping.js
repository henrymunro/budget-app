//@flow

import * as React from "react";

import type { BudgetTypeType, GroupedBudgetTypesType } from "../../budgetTypes";
import { BudgetTypesDropdown } from "../../budgetTypes";
import Card from "features/common/components/Card";

import "./NewMapping.css";

type Props = {
  name?: string,
  alias?: string,
  type?: BudgetTypeType,
  saveMapping: () => void,
  budgetTypes: Array<GroupedBudgetTypesType>,
  updateNewMappingName: string => void,
  updateNewMappingAlias: string => void,
  updateNewMappingType: string => void,
  fetchBudgetTypes: () => void
};

export default class NewMapping extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetchBudgetTypes();
  }

  _updateNewMappingName = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.updateNewMappingName(e.target.value);
  };

  _updateNewMappingAlias = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.updateNewMappingAlias(e.target.value);
  };

  render() {
    const {
      name,
      alias,
      type,
      saveMapping,
      budgetTypes,
      updateNewMappingType
    } = this.props;
    return (
      <Card title="Create new mapping">
        <div className="NewMapping">
          <div>
            <p>Mapping Name:</p>
            <input
              type="text"
              value={name || ""}
              onChange={this._updateNewMappingName}
            />
          </div>
          <div>
            <p>Mapping Alias:</p>
            <input
              type="text"
              value={alias || ""}
              onChange={this._updateNewMappingAlias}
            />
          </div>
          <div>
            <p>Type: </p>
            <BudgetTypesDropdown
              budgetType={type}
              budgetTypes={budgetTypes}
              handleTypeClick={updateNewMappingType}
            />
          </div>
          <button onClick={saveMapping}>Save</button>
        </div>
      </Card>
    );
  }
}
