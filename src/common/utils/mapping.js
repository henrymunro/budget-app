// @flow

import type { MappingType } from "features/mappings";
import type { LedgerType } from "../../../backend/modules/database";
import type { SaveFileEntryType } from "../../features/fileUpload";

export const groupDescriptions = (
  descriptions: Array<string>
): Array<{ description: string, count: number }> => {
  const groupedDescriptions = descriptions
    .reduce((prev, description) => {
      const index = prev.map(elm => elm.description).indexOf(description);
      if (index >= 0) prev[index].count++;
      else prev.push({ description, count: 1 });
      return prev;
    }, [])
    .sort((a, b) => b.count - a.count);

  return groupedDescriptions;
};

export const applyMapping = (
  description: string,
  mappings: Array<MappingType>
) => {
  // Sort the mappings in order of string length descending
  const sortedMappings = mappings.sort(
    (a, b) => b.mapping.length - a.mapping.length
  );
  let matchedMapping = {};
  // Find any match with the longest, most specific mapping
  for (let i = 0; i <= sortedMappings.length - 1; i++) {
    const mapping = sortedMappings[i];
    const match = matchMapping(description, mapping.mapping);
    if (match) {
      matchedMapping = mapping;
      break;
    }
  }
  const { alias, ...otherMappingDetails } = matchedMapping;
  return {
    mappingAlias: alias,
    ...otherMappingDetails
  };
};

const matchMapping = (description: string, mapping: string) => {
  const splitMapping = mapping.match(/\S+/g) || [];
  let noMatch = false;
  splitMapping.forEach(map => {
    var re = new RegExp(map, "gi");
    if (!description.match(re)) noMatch = true;
  });
  return !noMatch;
};
