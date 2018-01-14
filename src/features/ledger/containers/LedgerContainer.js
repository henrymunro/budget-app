// @flow
import { connect } from "react-redux";
// import uuid from "uuid/v1";

import { toJS } from "common/utils";

import {
  getLedger,
  getLedgerEdits,
  getLedgerGroupedByMonth,
  getLedgerGroupedByType,
  getLedgerCRUDState
} from "../selectors";

import { ledgerCRUDActions } from "../actions";

import Ledger from "../components/Ledger";

const mapStateToProps = state => {
  return {
    ledger: getLedger(state),
    ledgerEdits: getLedgerEdits(state),
    ledgerGroupedByMonth: getLedgerGroupedByMonth(state),
    ledgerGroupedByType: getLedgerGroupedByType(state),
    ledgerCRUDState: getLedgerCRUDState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLedger: () => dispatch(ledgerCRUDActions.fetchAction()),
    saveLedgerEntry: ledgerEntry =>
      dispatch(ledgerCRUDActions.saveAction(ledgerEntry)),
    deleteLedgerEntry: _id => dispatch(ledgerCRUDActions.deleteAction(_id)),
    updateLedgerEntry: updates =>
      dispatch(ledgerCRUDActions.updateAction(updates)),
    saveLedgerEdits: updates =>
      dispatch(ledgerCRUDActions.multiupdateAction(updates))
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    saveLedgerEdits: () => dispatchProps.saveLedgerEdits(stateProps.ledgerEdits)
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  toJS(Ledger)
);
