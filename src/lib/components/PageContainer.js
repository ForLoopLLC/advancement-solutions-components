import React from "react";
import { Box } from "@mui/system";

const PageContainer = ({ bordered = true, width, children, sx }) => {
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirction: "column",
        justifyContent: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          maxWidth: width ? `${width}px` : "1000px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            ...(bordered && {
              borderColor: "#cdcdcd",
              borderStyle: "solid",
              borderWidth: 1,
            }),
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default PageContainer;
