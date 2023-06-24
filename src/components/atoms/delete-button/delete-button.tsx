import { Trash } from "@phosphor-icons/react";

import styles from "./delete-button.module.css";

export const DeleteButton = () => {
  return (
    <button type="button" className={styles.deleteButton}>
      <Trash size={24} />
    </button>
  );
};
