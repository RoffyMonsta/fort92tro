import { createContext, useState } from "react";
import { Snackbar, Slide, Alert } from "@mui/material";

export enum Severity {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
  WARNING = "warning",
}

type ToastContextType = {
  showToast: (options: {
    message: string;
    severity?: Severity;
    autoHideDuration?: number;
  }) => void;
};

export const SnackbarContext = createContext<ToastContextType | undefined>(
  undefined
);

/**
 * SnackbarProvider is a provider component that wraps your application and provides the showToast function to show toasts.
 * @param children The root of your application.
 * @returns The root of your application with the SnackbarProvider.
 */

export const SnackbarProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<Severity>(Severity.SUCCESS); // success, error, info, warning
  const [autoHideDuration, setAutoHideDuration] = useState(3000);

  const handleClose = () => {
    setOpen(false);
  };

  const showToast = ({
    message,
    severity = Severity.SUCCESS,
    autoHideDuration = 3000,
  }: any) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
    setAutoHideDuration(autoHideDuration);
  };

  return (
    <SnackbarContext.Provider value={{ showToast }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
