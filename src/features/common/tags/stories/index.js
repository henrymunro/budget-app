import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Tag from "../components/Tag";

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

storiesOf("Common/Tag", module).add("basic", () => (
  <Wrapper>
    <Tag title="Test" />
  </Wrapper>
));
