// @flow

import React from "react";
import Table from "features/common/table/components/Table";
import LoadingSpinner from "features/common/components/LoadingSpinner";
import type { SuggestedMappingType } from "../models/MappingContainer";
import { capitalise } from "common/utils";

type Props = {
  suggestedMappings: Array<SuggestedMappingType>,
  loading?: boolean
};

const SuggestedMappings = ({ suggestedMappings, loading }: Props) => {
  const renderTableRows = () => {
    const mappedRows = suggestedMappings
      .splice(0, 5)
      .map(({ description, count }, index) => (
        <tr key={index}>
          <td>{capitalise(description)}</td>
          <td>{count}</td>
        </tr>
      ));
    return mappedRows;
  };

  console.log("HERE: ", { suggestedMappings, loading });

  const thead = (
    <tr>
      <th>Name</th>
      <th>Count</th>
    </tr>
  );
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        suggestedMappings &&
        suggestedMappings.length > 0 && (
          <Table thead={thead}>{renderTableRows()}</Table>
        )
      )}
    </div>
  );
};

export default SuggestedMappings;
