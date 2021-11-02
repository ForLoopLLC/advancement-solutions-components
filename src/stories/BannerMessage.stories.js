import React from "react";

import BannerMessage from "../lib/components/BannerMessage";

export default {
  component: BannerMessage,
  title: "Components/BannerMessage",
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <BannerMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "This is a banner message",
};
