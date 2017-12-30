// @flow

import * as React from "react";

import "./Table.css";

type Props = {
  thead: React.Node,
  children: React.Node
};

export default class Table extends React.PureComponent<Props> {
  render() {
    const { thead, children } = this.props;

    return (
      <table className="Table">
        <thead>{thead}</thead>
        <tbody>{children}</tbody>
      </table>
    );
  }
}
