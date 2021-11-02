import React from "react";
import { Box } from "@mui/system";

const FieldContainer = ({ sx, bordered, gutter, children }) => (
  <Box
    sx={{
      width: "100%",
      p: 1,
      display: "flex",
      flexDirection: "column",
      ...(bordered && {
        borderColor: "#cdcdcd",
        borderStyle: "solid",
        borderWidth: 1,
      }),
      ...(gutter && { margin: 1 }),
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default FieldContainer;
