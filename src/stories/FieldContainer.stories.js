import React from "react";
import FieldContainer from "../lib/components/FieldContainer";

export default {
  component: FieldContainer,
  title: "Components/Containers/FieldContainer",
  argTypes: {
    bordered: {
      control: { type: "boolean" },
    },
    gutter: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => (
  <FieldContainer {...args}>
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
    <p>Four</p>
  </FieldContainer>
);

export const Default = Template.bind({});
Default.args = { bordered: true, gutter: true };
