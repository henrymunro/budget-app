import React from "react";
import ReactLoading from "react-loading";

import "./LoadingSpinner.css";

type Props = {
  type?: string,
  color?: string,
  height?: number,
  width?: number
};

const LoadingSpinner = ({ type, color, height, width }: Props) => (
  <ReactLoading
    className="LoadingSpinner"
    type={type || "spinningBubbles"}
    color={"black"}
    height={height || "64px"}
    width={width || "64px"}
    delay={0}
  />
);

export default LoadingSpinner;
