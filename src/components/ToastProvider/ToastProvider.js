import React, { useState } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast(id, message, variant) {
    setToasts((current) => [...current, { id, message, variant }]);
  }

  function removeToast(id) {
    setToasts((currentToasts) =>
      currentToasts.filter((currToast) => currToast.id !== id)
    );
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
