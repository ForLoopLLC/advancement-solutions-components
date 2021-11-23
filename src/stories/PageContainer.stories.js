import React from "react";
import PageContainer from "../lib/components/PageContainer";

export default {
  component: PageContainer,
  title: "Components/Page/PageContainer",
  argTypes: {
    bordered: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => (
  <PageContainer {...args}>
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
    <p>Four</p>
  </PageContainer>
);

export const Default = Template.bind({});
Default.args = { bordered: true };

export const NoBorder = Template.bind({});
NoBorder.args = { bordered: false };

export const FullWidth = Template.bind({});
FullWidth.args = { bordered: true, fullWidth: true };
