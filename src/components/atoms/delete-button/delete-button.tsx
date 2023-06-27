import styles from "./delete-button.module.css";

import { Trash } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";

export const DeleteButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element => {
  return (
    <button type="button" className={styles.deleteButton} {...props}>
      <Trash size={24} />
    </button>
  );
};
