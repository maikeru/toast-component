import React, { useState, useCallback } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((id, message, variant) => {
    setToasts((current) => [...current, { id, message, variant }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((currToast) => currToast.id !== id)
    );
  }, []);

  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, removeAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
