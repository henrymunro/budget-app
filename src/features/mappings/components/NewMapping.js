//@flow

import * as React from "react";

import type { BudgetTypeType, GroupedBudgetTypesType } from "../../budgetTypes";
import { BudgetTypesDropdown } from "../../budgetTypes";
import Input from "features/common/components/Input";
import PrimaryButton from "features/common/buttons/components/PrimaryButton";

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

  render() {
    const {
      name,
      alias,
      type,
      saveMapping,
      budgetTypes,
      updateNewMappingName,
      updateNewMappingAlias,
      updateNewMappingType
    } = this.props;

    const formComplete = name && alias && type && type.type;
    return (
      <div className="NewMapping">
        <div>
          <p>Mapping Name:</p>
          <Input value={name} onChange={updateNewMappingName} />
        </div>
        <div>
          <p>Mapping Alias:</p>
          <Input value={alias} onChange={updateNewMappingAlias} />
        </div>
        <div>
          <p>Type: </p>
          <BudgetTypesDropdown
            budgetType={type}
            budgetTypes={budgetTypes}
            handleTypeClick={updateNewMappingType}
          />
        </div>
        <div className="NewMapping__button">
          <PrimaryButton
            text="Save"
            onClick={saveMapping}
            disabled={!formComplete}
          />
        </div>
      </div>
    );
  }
}
