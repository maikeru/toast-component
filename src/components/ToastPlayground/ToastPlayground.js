import React, { useState } from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  const [variant, setVariant] = useState("notice");

  function handleVariantChange(event) {
    setVariant(event.target.value);
  }

  const [isToastVisible, setIsToastVisible] = useState(false);
  function handleToastDismiss() {
    setIsToastVisible(false);
  }

  function handleSubmit() {
    setIsToastVisible(true);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && (
        <Toast
          variant={variant}
          message={message}
          onDismiss={handleToastDismiss}
        />
      )}

      <div className={styles.controlsWrapper}>
        <MessageInput
          message={message}
          handleMessageChange={handleMessageChange}
        />

        <VariantInput
          value={variant}
          handleVariantChange={handleVariantChange}
        />

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handleSubmit}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VariantInput({ value, handleVariantChange }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {VARIANT_OPTIONS.map((variant) => (
          <label key={`variant-${variant}`} htmlFor={`variant-${variant}`}>
            <input
              id={`variant-${variant}`}
              type="radio"
              name="variant"
              value={variant}
              checked={value === variant}
              onChange={handleVariantChange}
            />
            {variant}
          </label>
        ))}
      </div>
    </div>
  );
}

function MessageInput({ message, handleMessageChange }) {
  return (
    <div className={styles.row}>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={message}
          onChange={handleMessageChange}
        />
      </div>
    </div>
  );
}

export default ToastPlayground;
