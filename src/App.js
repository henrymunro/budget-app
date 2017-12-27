// @flow

import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import FileUpload from "/Users/senecalearning/budget-app/src/features/fileUpload/index.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FileUpload />
        </div>
      </Provider>
    );
  }
}

export default App;
