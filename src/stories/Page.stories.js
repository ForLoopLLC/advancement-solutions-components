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
Default.args = { user: { message: "This is a test message for the user" } };

export const Busy = Template.bind({});
Busy.args = {
  busy: true,
  user: { message: "This is a test message for the user" },
};
