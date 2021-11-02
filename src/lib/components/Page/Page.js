import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { BannerMessage } from "../BannerMessage";
import { Box } from "@mui/system";

const Page = ({ user, children, busy = false }) => {
  return (
    <Box>
      {user && user.message && <BannerMessage text={user.message} />}
      <Box
        sx={{
          padding: 2,
        }}
      >
        <Backdrop
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            color: "#fff",
          }}
          open={busy}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {children}
      </Box>
    </Box>
  );
};

export default Page;
