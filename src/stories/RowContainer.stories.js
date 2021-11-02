import React from "react";
import RowContainer from "../lib/components/RowContainer";

export default {
  component: RowContainer,
  title: "Components/Containers/RowContainer",
  argTypes: {
    bordered: {
      control: { type: "boolean" },
    },
    gutter: {
      control: { type: "boolean" },
    },
    align: {
      options: [
        "start",
        "end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => (
  <RowContainer {...args}>
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
    <p>Four</p>
  </RowContainer>
);

export const Default = Template.bind({});
Default.args = { bordered: true, gutter: true, align: "center" };
