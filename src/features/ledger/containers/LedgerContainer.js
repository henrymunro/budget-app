// @flow
import { connect } from "react-redux";
// import uuid from "uuid/v1";

import { toJS } from "common/utils";

import {
  getLedger,
  getLedgerGroupedByMonth,
  getLedgerGroupedByType,
  getLedgerCRUDState
} from "../selectors";

import { ledgerCRUDActions } from "../actions";

import Ledger from "../components/Ledger";

const mapStateToProps = state => {
  return {
    ledger: getLedger(state),
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
      dispatch(ledgerCRUDActions.updateAction(updates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Ledger));
