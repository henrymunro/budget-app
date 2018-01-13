// @flow

import * as React from "react";

import type { MappingType } from "../models/MappingContainer";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";
import { BudgetTypeList } from "../../budgetTypes";
import type { BudgetTypeType, GroupedBudgetTypesType } from "../../budgetTypes";
import MappingsTable from "./MappingsTable";
import NewMapping from "./NewMapping";

import "./Mapping.css";

type Props = {
  newMappingName?: string,
  newMappingAlias?: string,
  newMappingType?: BudgetTypeType,
  mappings: Array<MappingType>,
  mappingCRUDState: WebApiCRUDState,
  budgetTypes: Array<GroupedBudgetTypesType>,
  updateNewMappingName: string => void,
  updateNewMappingAlias: string => void,
  updateNewMappingType: string => void,
  fetchMappings: () => void,
  saveNewMapping: () => void,
  deleteMapping: string => void,
  updateMapping: ({ _id: string }) => void,
  fetchBudgetTypes: () => void
};

export default class Mapping extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetchMappings();
  }

  render() {
    const {
      newMappingName,
      newMappingAlias,
      newMappingType,
      updateNewMappingName,
      updateNewMappingAlias,
      updateNewMappingType,
      saveNewMapping,
      budgetTypes,
      mappings,
      deleteMapping,
      fetchBudgetTypes
    } = this.props;

    return (
      <div>
        <NewMapping
          name={newMappingName}
          alias={newMappingAlias}
          type={newMappingType}
          updateNewMappingName={updateNewMappingName}
          updateNewMappingAlias={updateNewMappingAlias}
          updateNewMappingType={updateNewMappingType}
          saveMapping={saveNewMapping}
          budgetTypes={budgetTypes}
          fetchBudgetTypes={fetchBudgetTypes}
        />

        <MappingsTable mappings={mappings} deleteMapping={deleteMapping} />
      </div>
    );
  }
}
