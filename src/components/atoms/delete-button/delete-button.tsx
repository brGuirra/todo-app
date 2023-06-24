import styles from "./delete-button.module.css";

import { Trash } from "@phosphor-icons/react";

export const DeleteButton = (): JSX.Element => {
  return (
    <button type="button" className={styles.deleteButton}>
      <Trash size={24} />
    </button>
  );
};
