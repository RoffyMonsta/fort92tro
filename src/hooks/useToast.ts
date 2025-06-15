import { useContext } from "react";
import { SnackbarContext } from "../components/Toast";

// Custom hook to show toast
export const useToast = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useToast must be used within a SnackbarProvider");
  }
  return context.showToast;
};
