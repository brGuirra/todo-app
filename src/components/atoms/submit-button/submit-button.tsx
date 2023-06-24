import { PlusCircle } from "@phosphor-icons/react";

import styles from "./submit-button.module.css";

export const SubmitButton = () => {
  return (
    <button type="submit" className={styles.submitButton}>
      <span>Criar</span>
      <PlusCircle size={24} />
    </button>
  );
};
