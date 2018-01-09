// @flow
import React from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

import "./NavBar.css";

export default class NavBar extends React.Component<null, null> {
  render() {
    return (
      <nav className="NavBar">
        <ul>
          <li>
            <NavLink to="/ledger">Ledger</NavLink>
          </li>
          <li>
            <NavLink to="/mappings">Mappings</NavLink>
          </li>
          <li>
            <NavLink to="/types">Types</NavLink>
          </li>
          <li>
            <NavLink to="/fileUpload">Upload</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
