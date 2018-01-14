//@flow

import * as React from "react";
import classNames from "classnames";

import "./PrimaryButton.css";

type Props = {
  onClick?: () => void,
  text: string,
  disabled?: boolean,
  loading?: boolean
};

const PrimaryButton = ({ onClick, text, disabled }: Props) => {
  const _handleClick = () => {
    onClick && onClick();
  };

  const buttonClass = classNames({
    PrimaryButton: true,
    "PrimaryButton--disabled": disabled
  });

  return (
    <button className={buttonClass} onClick={_handleClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;
