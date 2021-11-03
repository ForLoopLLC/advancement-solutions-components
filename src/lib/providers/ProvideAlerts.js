import React, { createContext, useContext, useState } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const alertContext = createContext();

const ProvideAlerts = ({ children }) => {
  const ctx = useAlertManger();
  return <alertContext.Provider value={ctx}>{children}</alertContext.Provider>;
};

const useAlertManger = () => {
  const [envelope, setEnvelope] = useState();

  const send = (env) => {
    setEnvelope(env);
  };

  const handleClose = () => {
    setEnvelope(null);
  };

  return { envelope, send, open: Boolean(envelope), handleClose };
};

export const useAlert = () => {
  return useContext(alertContext);
};

export const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Alerts = () => {
    const { envelope, open, handleClose } = useAlert();
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {envelope && (
          <Alert severity={envelope.severity}>{envelope.message}</Alert>
        )}
      </Snackbar>
    );
  };

export default ProvideAlerts;
