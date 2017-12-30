// @flow

import React from "react";
import type { MappingType } from "../models/MappingContainer";
import Table from "features/common/table/components/Table";
import { findClosestId } from "common/utils";

type Props = {
  mappings: Array<MappingType>,
  deleteMapping?: string => void
};

export default class MappingsTable extends React.PureComponent<Props> {
  _deleteMapping = (e: SyntheticEvent<HTMLDivElement>) => {
    const { deleteMapping } = this.props;
    if (!!deleteMapping && typeof deleteMapping === "function") {
      const _id = findClosestId(e);
      deleteMapping(_id);
    }
  };

  renderTableRows = () => {
    const { mappings } = this.props;
    const mappedRows = mappings.map(
      ({ mapping, alias, type, subType, _id }, index) => (
        <tr key={index} data-id={_id} onClick={this._deleteMapping}>
          <td>{mapping}</td>
          <td>{alias}</td>
          <td>{type}</td>
          <td>{subType}</td>
        </tr>
      )
    );
    return mappedRows;
  };

  render() {
    const { mappings } = this.props;
    const thead = (
      <tr>
        <th>Name</th>
        <th>Alias</th>
        <th>Type</th>
        <th>Sub Type</th>
      </tr>
    );
    return (
      <div>
        {mappings &&
          mappings.length > 0 && (
            <Table thead={thead}>{this.renderTableRows()}</Table>
          )}
      </div>
    );
  }
}
