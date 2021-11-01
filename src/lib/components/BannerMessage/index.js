import React from "react";
import { Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { RowContainer } from "../RowContainer";

export const BannerMessage = ({ text }) => {
  return (
    <RowContainer
      sx={{
        backgroundColor: "info.main",
      }}
    >
      <WarningIcon
        sx={{
          mt: 2,
          mb: 2,
          color: "info.contrastText",
        }}
      />
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          mb: 2,
          ml: 2,
          color: "info.contrastText",
        }}
      >
        {text}
      </Typography>
    </RowContainer>
  );
};
