import styles from "./form.module.css";

import { Input, SubmitButton } from "components/atoms";

export const Form = () => {
  return (
    <form className={styles.form}>
      <Input placeholder="Adicione uma tarefa" />
      <SubmitButton />
    </form>
  );
};
