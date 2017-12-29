// @flow
import { connect } from "react-redux";

import { toJS } from "common/utils";

import {
  getNewMappingName,
  getNewMappingAlias,
  getNewMappingType,
  getMappings,
  getMappingCRUDState
} from "../selectors";

import {
  updateNewMappingName,
  updateNewMappingAlias,
  updateNewMappingType,
  mappingCRUDActions
} from "../actions";

import {
  getBudgetTypes,
  getNestedBudgetTypes,
  fetchBudgetTypes
} from "../../budgetTypes";

import Mapping from "../components/Mapping";

const mapStateToProps = state => {
  return {
    newMappingName: getNewMappingName(state),
    newMappingAlias: getNewMappingAlias(state),
    newMappingType: getNewMappingType(state),
    mappings: getMappings(state),
    mappingCRUDState: getMappingCRUDState(state),
    budgetTypes: getNestedBudgetTypes(state),
    nonNestedBudgetTypes: getBudgetTypes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewMappingName: name => dispatch(updateNewMappingName(name)),
    updateNewMappingAlias: alias => dispatch(updateNewMappingAlias(alias)),
    updateNewMappingType: type => dispatch(updateNewMappingType(type)),
    fetchMappings: () => dispatch(mappingCRUDActions.fetchAction()),
    saveNewMapping: mapping => dispatch(mappingCRUDActions.saveAction(mapping)),
    deleteMapping: _id => dispatch(mappingCRUDActions.deleteAction(_id)),
    updateMapping: updates =>
      dispatch(mappingCRUDActions.updateAction(updates)),
    fetchBudgetTypes: () => dispatch(fetchBudgetTypes())
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { _id, ...otherNewMappingTypeDetails } = stateProps.newMappingType;
  const newMappingToSave = {
    ...otherNewMappingTypeDetails,
    _typeId: _id,
    mapping: stateProps.newMappingName,
    alias: stateProps.newMappingAlias
  };
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    saveNewMapping: () => dispatchProps.saveNewMapping(newMappingToSave),
    updateNewMappingType: (_id: string) => {
      const type = stateProps.nonNestedBudgetTypes
        .toJS()
        .filter(elm => elm._id === _id)[0];
      return dispatchProps.updateNewMappingType(type);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  toJS(Mapping)
);
