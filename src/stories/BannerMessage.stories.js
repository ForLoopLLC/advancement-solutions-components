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
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
