// @flow

import * as React from "react";

import type {
  MappingType,
  SuggestedMappingType
} from "../models/MappingContainer";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";
import type { BudgetTypeType, GroupedBudgetTypesType } from "../../budgetTypes";
import MappingsTable from "./MappingsTable";
import NewMapping from "./NewMapping";
import SuggestedMappings from "./SuggestedMappings";
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
  fetchBudgetTypes: () => void,
  fetchLedger: () => void,
  suggestedMappings: Array<SuggestedMappingType>,
  mappingsLedgerUpdates: Array<SuggestedMappingType>,
  applyMappingsToAllLedgerItems: () => void
};

export default class Mapping extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetchMappings();
    this.props.fetchLedger();
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
      mappingCRUDState,
      suggestedMappings,
      mappingsLedgerUpdates,
      applyMappingsToAllLedgerItems
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
              applyMappingsToAllLedgerItems={applyMappingsToAllLedgerItems}
            />
          </Card>
          <Card
            title={
              mappingsLedgerUpdates.length > 0
                ? "UPDATES"
                : "Suggested mappings"
            }
          >
            <SuggestedMappings
              mappingsLedgerUpdates={mappingsLedgerUpdates}
              suggestedMappings={suggestedMappings}
              loading={
                !suggestedMappings ||
                (suggestedMappings && suggestedMappings.length === 0)
              }
            />
          </Card>
        </div>
      </div>
    );
  }
}
