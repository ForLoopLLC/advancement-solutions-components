import React from "react";
import PageContainer from "../lib/components/PageContainer";

export default {
  component: PageContainer,
  title: "Components/Page/PageContainer",
  argTypes: {
    bordered: {
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
