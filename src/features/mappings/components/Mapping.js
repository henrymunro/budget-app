// @flow

import * as React from "react";

import type { MappingType } from "../models/MappingContainer";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";
import { BudgetTypeList } from "../../budgetTypes";
import type { BudgetTypeType, GroupedBudgetTypesType } from "../../budgetTypes";
import MappingsTable from "./MappingsTable";
import NewMapping from "./NewMapping";
import Card from "features/common/components/Card";

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
      fetchBudgetTypes,
      mappingCRUDState
    } = this.props;

    return (
      <div className="Mapping">
        <div>
          <Card title="Your mappings">
            <MappingsTable
              mappings={mappings}
              deleteMapping={deleteMapping}
              loading={
                mappingCRUDState.fetch.pending || mappingCRUDState.fetch.error
              }
            />
          </Card>
        </div>
        <div>
          <Card title="Add new mapping">
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
          </Card>
        </div>
      </div>
    );
  }
}
