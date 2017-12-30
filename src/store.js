import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { reducer as fileUpload } from "features/fileUpload";
import { reducer as budgetType } from "features/budgetTypes";
import { reducer as mapping } from "features/mappings";
import { reducer as ledger } from "features/ledger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
  stateTransformer: state => state.toJS()
});

const reducer = combineReducers({
  fileUpload,
  budgetType,
  mapping,
  ledger
});

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(promise(), thunk, logger))
);

export function createStoreWithState(state) {
  return createStore(
    reducer,
    state,
    composeEnhancers(applyMiddleware(promise(), thunk, logger))
  );
}

export default store;
