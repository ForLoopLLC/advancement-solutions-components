import React from "react";

import Page from "../lib/components/Page";

export default {
  component: Page,
  title: "Components/Page/Page",
  argTypes: {
    busy: {
      control: { type: "boolean" },
    },
    user: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => (
  <Page {...args}>
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
    <p>Four</p>
  </Page>
);

export const Default = Template.bind({});
Default.args = {
  user: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Busy = Template.bind({});
Busy.args = {
  busy: true,
  user: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};
