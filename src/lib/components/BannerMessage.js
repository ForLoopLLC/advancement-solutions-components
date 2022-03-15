import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import RowContainer from "./RowContainer";

const BannerMessage = ({ text }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <RowContainer
      sx={{
        backgroundColor: "info.main",
      }}
    >
      {!isMobile && (
        <WarningIcon
          sx={{
            mt: 1,
            mb: 1,
            mr: 1,
            color: "info.contrastText",
          }}
        />
      )}
      <Typography
        variant="body1"
        align="center"
        sx={{
          mt: 1,
          mb: 1,
          color: "info.contrastText",
        }}
      >
        {text}
      </Typography>
    </RowContainer>
  );
};

export default BannerMessage;
