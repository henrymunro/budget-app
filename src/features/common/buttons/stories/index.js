import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import DeleteIcon from "../components/DeleteIcon";

const Wrapper = ({ children }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "10px"
    }}
  >
    {children}
  </div>
);

storiesOf("Common/Buttons", module).add("DeleteIcon", () => (
  <Wrapper>
    <DeleteIcon />
  </Wrapper>
));
