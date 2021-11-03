import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

//tool for cleaning up svg https://jakearchibald.github.io/svgomg/
const SwapIcon = ({ brand, ...rest }) => (
  <SvgIcon {...rest}>
    <path d="M 7.4584972,23.069482 V 19.638536 H 20.093224 V 14.593219 H 7.4584972 V 11.167204 L 1.0229115,17.118343 Z M 16.560763,1.085379 V 4.516325 H 3.9260363 V 9.5616417 H 16.560763 v 3.4260153 l 6.435586,-5.9511395 z" />
  </SvgIcon>
);

export default SwapIcon;
