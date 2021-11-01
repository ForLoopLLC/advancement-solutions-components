import React from "react";
import { Box } from "@mui/system";

const RowContainer = ({ sx, align = "center", bordered, gutter, children }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: align,
      alignItems: "center",
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

export default RowContainer;
