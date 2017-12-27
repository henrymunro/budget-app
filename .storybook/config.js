/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator } from "@storybook/react";
import StoryRouter from "storybook-router";

import "normalize.css";
import "common/assets/fonts/fontawesome-free-5.0.2/svg-with-js/js/fontawesome-all.js";

function loadStories() {
  require("../src/features/common/tags/stories");
  require("../src/features/common/buttons/stories");
}

addDecorator(StoryRouter());

configure(loadStories, module);
