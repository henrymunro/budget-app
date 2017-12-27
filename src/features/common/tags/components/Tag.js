// @flow

import React from "react";

import DeleteIcon from "../../buttons/components/DeleteIcon";

import "./Tag.css";

type Props = {
  title: string,
  handleClick?: () => void,
  handleDelete?: () => void
};

const Tag = (props: Props) => {
  const { title, handleClick, handleDelete } = props;
  const _handleClick = () => typeof handleClick === "function" && handleClick();

  const _handleDelete = () =>
    typeof handleDelete === "function" && handleDelete();

  return (
    <div className="tag" onClick={_handleClick}>
      <span>{title}</span>
      <div onClick={_handleDelete}>
        <DeleteIcon handleClick={_handleDelete} buttonClass="light" />
      </div>
    </div>
  );
};

export default Tag;
