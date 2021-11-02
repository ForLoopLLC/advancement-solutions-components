import React from "react";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";

const Breadcrumbs = ({ children }) => (
  <MuiBreadcrumbs sx={{ mb: 1 }} aria-label="Breadcrumb" maxItems={5}>
    {children}
  </MuiBreadcrumbs>
);

export default Breadcrumbs;
