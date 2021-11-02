import React from "react";
import { Box } from "@mui/system";

const lookup = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

const ColumnContainer = ({
  sx,
  align = "center",
  bordered,
  gutter,
  children,
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: lookup[align],
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

export default ColumnContainer;
