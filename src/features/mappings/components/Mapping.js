// @flow

import * as React from "react";

import type { MappingType } from "../models/MappingContainer";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";
import { BudgetTypeList } from "../../budgetTypes";
import type { BudgetTypeType, GroupedBudgetTypesType } from "../../budgetTypes";
import MappingsTable from "./MappingsTable";

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

  _updateNewMappingName = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.updateNewMappingName(e.target.value);
  };

  _updateNewMappingAlias = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.updateNewMappingAlias(e.target.value);
  };

  _updateNewMappingType = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.updateNewMappingType(e.target.value);
  };

  renderNewMapping() {
    const {
      newMappingName,
      newMappingAlias,
      newMappingType,
      saveNewMapping,
      fetchMappings
    } = this.props;
    return (
      <div>
        <input
          type="text"
          value={newMappingName || ""}
          onChange={this._updateNewMappingName}
        />
        <input
          type="text"
          value={newMappingAlias || ""}
          onChange={this._updateNewMappingAlias}
        />
        {!!newMappingType && (
          <p>
            Type: {newMappingType.type}, SubType: {newMappingType.subType}
          </p>
        )}
        <button onClick={saveNewMapping}>Save</button>
        <button onClick={fetchMappings}>Fetch</button>
      </div>
    );
  }
  render() {
    const {
      budgetTypes,
      updateNewMappingType,
      mappings,
      deleteMapping
    } = this.props;

    return (
      <div>
        {this.renderNewMapping()}
        <p>Type: </p>
        <BudgetTypeList
          budgetTypes={budgetTypes}
          handleTypeClick={updateNewMappingType}
        />
        <MappingsTable mappings={mappings} deleteMapping={deleteMapping} />
      </div>
    );
  }
}
