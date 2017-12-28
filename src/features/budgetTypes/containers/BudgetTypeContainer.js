// @flow
import { connect } from "react-redux";
// import uuid from "uuid/v1";

import { toJS } from "common/utils";

import {
  getNewBudgetType,
  getNewBudgetSubType,
  getBudgetTypes,
  getBudgetTypesFetchState,
  getBudgetTypeSaveState
} from "../selectors";

import {
  updateNewBudgetType,
  updateNewBudgetSubType,
  fetchBudgetTypes,
  saveNewBudgetType
} from "../actions";

import BudgetTypes from "../components/BudgetTypes";

const mapStateToProps = state => {
  return {
    newBudgetType: getNewBudgetType(state),
    newBudgetSubType: getNewBudgetSubType(state),
    budgetTypes: getBudgetTypes(state),
    budgetTypesFetchState: getBudgetTypesFetchState(state),
    budgetTypesSaveState: getBudgetTypeSaveState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewBudgetType: input => dispatch(updateNewBudgetType(input)),
    updateNewBudgetSubType: input => dispatch(updateNewBudgetSubType(input)),
    fetchBudgetTypes: () => dispatch(fetchBudgetTypes()),
    saveNewBudgetType: budgetType => dispatch(saveNewBudgetType(budgetType))
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const newBudgetTypeToSave = {
    type: stateProps.newBudgetType,
    subType: stateProps.newBudgetSubType
  };
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    saveNewBudgetType: () =>
      dispatchProps.saveNewBudgetType(newBudgetTypeToSave)
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  toJS(BudgetTypes)
);
