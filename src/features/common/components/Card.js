//@flow

import * as React from "react";
import classNames from "classnames";

import "./Card.css";

type Props = {
  title?: string,
  children: React.Node,
  hoverable?: boolean
};

const Card = ({ title, children, hoverable }: Props) => {
  const cardClass = classNames({
    Card: true,
    "Card--hoverable": hoverable
  });

  return (
    <div className={cardClass}>
      {title && <div className="Card__title">{title}</div>}
      <div className="Card__body">{children}</div>
    </div>
  );
};

export default Card;
