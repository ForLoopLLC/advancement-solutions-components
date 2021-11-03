import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

//tool for cleaning up svg https://jakearchibald.github.io/svgomg/
const AdvanceIcon = ({ brand, ...rest }) => (
  <SvgIcon {...rest}>
    <path d="M 22.962374,11.917167 A 10.94094,10.94094 0 0 1 12.021434,22.858107 10.94094,10.94094 0 0 1 1.0804939,11.917167 10.94094,10.94094 0 0 1 12.021434,0.97622681 10.94094,10.94094 0 0 1 22.962374,11.917167 Z" />
  </SvgIcon>
);

export default AdvanceIcon;
