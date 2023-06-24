import { Input, SubmitButton } from "components/atoms";

import styles from "./form.module.css";

export const Form = () => {
  return (
    <form className={styles.form}>
      <Input placeholder="Adicione uma tarefa" />
      <SubmitButton />
    </form>
  );
};
