// @flow

import React from "react";
import Table from "features/common/table/components/Table";
import LoadingSpinner from "features/common/components/LoadingSpinner";
import type { SuggestedMappingType } from "../models/MappingContainer";
import { capitalise } from "common/utils";

type Props = {
  mappingsLedgerUpdates: Array<SuggestedMappingType>,
  suggestedMappings: Array<SuggestedMappingType>,
  loading?: boolean
};

const SuggestedMappings = ({
  mappingsLedgerUpdates,
  suggestedMappings,
  loading
}: Props) => {
  // table will show updates to ledger if any are yet to be saved, if not it will show suggested mappings
  const showMappingUpdates =
    mappingsLedgerUpdates && mappingsLedgerUpdates.length > 0;
  const renderTableRows = () => {
    const data = showMappingUpdates
      ? mappingsLedgerUpdates
      : suggestedMappings.splice(0, 5);

    const mappedRows = data.map(({ description, alias, count }, index) => (
      <tr key={index}>
        <td>{capitalise(description)}</td>
        <td>{alias}</td>
        <td>{count}</td>
      </tr>
    ));
    return mappedRows;
  };

  console.log("HERE: ", { mappingsLedgerUpdates });

  const thead = (
    <tr>
      <th>Name</th>
      <th>Alias</th>
      <th>Count</th>
    </tr>
  );
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Table thead={thead}>{renderTableRows()}</Table>
      )}
    </div>
  );
};

export default SuggestedMappings;
