import React from "react";

import ErrorMessage from "../lib/components/ErrorMessage";

export default {
  component: ErrorMessage,
  title: "Components/ErrorMessage",
  argTypes: {
    message: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Something bad happened... :(",
};
