//@flow

import * as React from "react";

import "./Input.css";

type Props = {
  value?: string,
  onChange?: string => void
};

export default class Input extends React.PureComponent<Props> {
  _handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange && onChange(e.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <div className="Input">
        <input type="text" onChange={this._handleChange} value={value || ""} />
      </div>
    );
  }
}
