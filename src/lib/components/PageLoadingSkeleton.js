import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { Typography } from "@mui/material";

const PageLoadingSkeleton = () => {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: "#fff",
      }}
      open={true}
    >
      <Typography variant="h6">Loading...</Typography>
    </Backdrop>
  );
};

export default PageLoadingSkeleton;
