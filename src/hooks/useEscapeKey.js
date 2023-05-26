import { useEffect } from "react";

/**
 * Enum of valid keys
 */
const keys = {
  Escape: "Escape",
  // etc
};

export function useKey(key, callback) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== key) return;

      callback();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, key]);
}

export function useEscapeKey(callback) {
  useKey(keys.Escape, callback);
}
