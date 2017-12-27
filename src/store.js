import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import thunk from "redux-thunk";

import { reducer as fileUpload } from "features/fileUpload";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  fileUpload
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export function createStoreWithState(state) {
  return createStore(reducer, state, composeEnhancers(applyMiddleware(thunk)));
}

export default store;
