import styles from "./form.module.css";

import { Input, SubmitButton } from "components/atoms";
import { useGlobalState } from "hooks/useGlobalState";
import { ChangeEvent, FormEvent, useState } from "react";

export const Form = (): JSX.Element => {
  const { createTask } = useGlobalState();
  const [newTask, setNewTask] = useState("");

  function handleNewTaskDescription(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  async function handleNewTaskCreation(event: FormEvent) {
    event.preventDefault();

    await createTask(newTask);

    setNewTask("");
  }

  return (
    <form className={styles.form} onSubmit={handleNewTaskCreation}>
      <Input
        placeholder="Adicione uma tarefa"
        value={newTask}
        onChange={handleNewTaskDescription}
      />
      <SubmitButton />
    </form>
  );
};
