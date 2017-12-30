// @flow
import MappingContainer from "./containers/MappingContainer";
import type { MappingType } from "./models/MappingContainer";
import { mappingCRUDActions } from "./actions";
import { getMappings } from "./selectors";
const fetchMappings = mappingCRUDActions.fetchAction;

export type { MappingType };
export { default as reducer } from "./reducers/mapping";
export { fetchMappings, getMappings };
export default MappingContainer;
