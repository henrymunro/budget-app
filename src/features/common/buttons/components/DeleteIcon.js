// @flow

import React from "react";

import "./DeleteIcon.css";

type Props = {
  handleClick?: () => void,
  iconClass?: string,
  buttonClass?: string
};

const DeleteIcon = (props: Props) => {
  const { handleClick, iconClass, buttonClass } = props;
  const _handleClick = () => typeof handleClick === "function" && handleClick();

  return (
    <button
      onClick={_handleClick}
      className={`DeleteIcon ${buttonClass ? buttonClass : ""}`}
    >
      <i className={`far fa-times-circle ${iconClass ? iconClass : ""}`} />
    </button>
  );
};

export default DeleteIcon;
