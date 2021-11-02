import React from "react";

import Chip from "../lib/components/Chip";

export default {
  component: Chip,
  title: "Components/Chip",
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = { label: "something nice" };
