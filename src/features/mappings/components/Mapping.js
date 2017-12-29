// @flow

import * as React from "react";

import type { MappingType } from "../models/MappingContainer";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";

import "./Mapping.css";

type Props = {
  newMappingName?: string,
  newMappingAlias?: string,
  newMappingType?: string,
  mappings: Array<MappingType>,
  mappingCRUDState: WebApiCRUDState,
  updateNewMappingName: string => void,
  updateNewMappingAlias: string => void,
  updateNewMappingType: string => void,
  fetchMappings: () => void,
  saveNewMapping: () => void,
  deleteMapping: string => void,
  updateMapping: ({ _id: string }) => void
};

export default class Mapping extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.fetchMappings();
  }

  _deleteMapping(e: SyntheticEvent<HTMLDivElement>) {
    const _id = e.target.getAttribute("data-id");
    this.props.deleteMapping(_id);
  }

  renderMappings = () => {
    const { mappings } = this.props;
    return (
      <div>
        {mappings &&
          mappings.length > 0 &&
          mappings.map((elm: MappingType, index) => {
            const { type, subType, mapping, alias, _id } = elm;
            return (
              <div key={index}>
                <p onClick={this._deleteMapping} data-id={_id}>
                  Type: {type}
                </p>
                <p>SubType: {subType}</p>
                <p>Mapping: {mapping}</p>
                <p>Alias: {alias}</p>
              </div>
            );
          })}
      </div>
    );
  };
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

        <button onClick={saveNewMapping}>Save</button>
        <button onClick={fetchMappings}>Fetch</button>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderNewMapping()}
        {this.renderMappings()}
      </div>
    );
  }
}
