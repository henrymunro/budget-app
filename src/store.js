import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { reducer as fileUpload } from "features/fileUpload";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
  stateTransformer: state => state.toJS()
});

const reducer = combineReducers({
  fileUpload
});

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export function createStoreWithState(state) {
  return createStore(
    reducer,
    state,
    composeEnhancers(applyMiddleware(thunk, logger))
  );
}

export default store;
