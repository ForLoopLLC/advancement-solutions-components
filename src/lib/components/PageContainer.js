import React from "react";
import { Box } from "@mui/system";

const PageContainer = ({ children, sx }) => {
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
          maxWidth: (props) => (props.width ? `${props.width}px` : "1000px"),
          width: "100%",
        }}
      >
        <Box
          sx={{
            border: (props) => (props.noBorder ? null : "1px solid #cdcdcd"),
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
