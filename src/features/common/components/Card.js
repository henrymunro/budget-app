//@flow

import * as React from "react";

import "./Card.css";

type Props = {
  title?: string,
  children: React.Node
};

export default class Card extends React.PureComponent<Props> {
  render() {
    const { title, children } = this.props;
    return (
      <div className="Card">
        {title && <div className="Card__title">{title}</div>}
        <div className="Card__body">{children}</div>
      </div>
    );
  }
}
