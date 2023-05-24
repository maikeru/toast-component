import React from "react";
import Toast from "../Toast";

import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleToastDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            onDismiss={() => handleToastDismiss(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
