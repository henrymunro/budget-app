// @flow

import React, { Component } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import store from "./store";

import "./App.css";
import "common/assets/fonts/fontawesome-free-5.0.2/svg-with-js/js/fontawesome-all.js";

import FileUpload from "features/fileUpload";
import BudgetType from "features/budgetTypes";
import Mappings from "features/mappings";
import Ledger from "features/ledger";
import NavBar from "features/common/components/NavBar";

class App extends Component<null> {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <NavBar />
              <div className="App__body">
                <Switch>
                  <Route path="/fileUpload" component={FileUpload} />
                  <Route path="/types" component={BudgetType} />
                  <Route path="/mappings" component={Mappings} />
                  <Route path="/ledger" component={Ledger} />
                  <Redirect to="/ledger" />
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
