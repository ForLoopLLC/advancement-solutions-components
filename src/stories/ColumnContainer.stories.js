import React from "react";

import ColumnContainer from "../lib/components/ColumnContainer";

export default {
  component: ColumnContainer,
  title: "Components/Containers/ColumnContainer",
  argTypes: {
    bordered: {
      control: { type: "boolean" },
    },
    gutter: {
      control: { type: "boolean" },
    },
    align: {
      options: ["start", "end", "center"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => (
  <ColumnContainer {...args}>
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
    <p>Four</p>
  </ColumnContainer>
);

export const Default = Template.bind({});
Default.args = { bordered: true, gutter: true, align: "center" };
