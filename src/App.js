// @flow

import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "common/assets/fonts/fontawesome-free-5.0.2/svg-with-js/js/fontawesome-all.js";

import FileUpload from "features/fileUpload";
import BudgetType from "features/budgetTypes";
import Mappings from "features/mappings";
import Ledger from "features/ledger";

class App extends Component<null> {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FileUpload />
          <BudgetType />
          <Mappings />
          <Ledger />
        </div>
      </Provider>
    );
  }
}

export default App;
