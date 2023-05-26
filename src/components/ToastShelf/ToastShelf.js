import React, { useContext, useEffect } from "react";
import Toast from "../Toast";

import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, removeToast, removeAllToasts } = useContext(ToastContext);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== "Escape") return;

      removeAllToasts();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [removeAllToasts]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            variant={toast.variant}
            onDismiss={() => removeToast(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
