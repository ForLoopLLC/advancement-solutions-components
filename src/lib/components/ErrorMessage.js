import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const ErrorMessage = ({ message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 4,
        }}
      >
        <Typography variant="h5">An error has occurred.</Typography>
        <Typography variant="body2">{message}</Typography>
      </Box>
    </Box>
  );
};

export default ErrorMessage;
