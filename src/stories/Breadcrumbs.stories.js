import React from "react";
import Breadcrumbs from "../lib/components/Breadcrumbs";
import Breadcrumb from "../lib/components/Breadcrumb";

export default {
  component: Breadcrumb,
  title: "Components/Breadcrumbs",
};

const Template = (args) => (
  <Breadcrumbs>
    <Breadcrumb label="Home" to={`/`} />
    <Breadcrumb label="Topics" to={`/topics`} />
    <Breadcrumb label="A cool topic" to={`/topics/1`} disabled />
  </Breadcrumbs>
);

export const Default = Template.bind({});
Default.args = {};
