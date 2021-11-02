import React from "react";

import Breadcrumb from "../lib/components/Breadcrumb";

export default {
  component: Breadcrumb,
  title: "Components/Breadcrumb",
  argTypes: {
    label: {
      control: { type: "text" },
    },
    to: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = { label: "A Link", to: "example/page" };

export const Disabled = Template.bind({});
Disabled.args = { label: "A Link", to: "example/page", disabled: true };
