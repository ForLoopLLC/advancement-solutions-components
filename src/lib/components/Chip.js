import React from "react";
import { Chip as MuiChip } from "@mui/material";

const Chip = ({ sx, ...rest }) => (
  <MuiChip
    sx={{
      m: 0.5,
      ...sx,
    }}
    {...rest}
  />
);

export default Chip;
