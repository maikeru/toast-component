import React, { useContext, useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function useNextId() {
  const [id, setId] = useState(0);
  return () => {
    const nextId = id;
    setId(id + 1);
    return nextId;
  };
}

function ToastPlayground() {
  const [message, setMessage] = useState("");

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  const [variant, setVariant] = useState("notice");

  function handleVariantChange(event) {
    setVariant(event.target.value);
  }

  const getNextId = useNextId();

  const { addToast } = useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    addToast(getNextId(), message, variant);
    setMessage("");
    setVariant("notice");
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

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
    </form>
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
