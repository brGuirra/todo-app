import styles from "./submit-button.module.css";

import { PlusCircle } from "@phosphor-icons/react";

export const SubmitButton = (): JSX.Element => {
  return (
    <button type="submit" className={styles.submitButton}>
      <span>Criar</span>
      <PlusCircle size={24} />
    </button>
  );
};
