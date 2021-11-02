import React from "react";

import Page from "./Page";

export default {
  component: Page,
  title: "Components/Page/Page",
};

export const Default = () => (
  <Page>
    <p>Some page content</p>
  </Page>
);

export const Busy = () => (
  <Page busy={true}>
    <p>Some page content</p>
  </Page>
);
