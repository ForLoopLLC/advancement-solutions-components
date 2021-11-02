import React from "react";
import { Box } from "@mui/system";

const lookup = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly",
};

const RowContainer = ({ sx, align = "center", bordered, gutter, children }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: lookup[align],
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
