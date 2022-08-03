import React from "react";

// Styles
import styles from "./button-component.module.scss";

export function AppButton({
  className,
  title,
  outline,
  color = "default",
  type = "button",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.appButton} ${
        outline && styles.outlineBtn
      } ${
        (color === "default" && styles.defaultBtn) ||
        (color === "light" && styles.lightBtn)
      }`}
      type={type}
    >
      <span className={styles.btnTxt}>{title}</span>
    </button>
  );
}
