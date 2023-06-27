import styles from "./task.module.css";

import { CheckBox, DeleteButton } from "components/atoms";
import { useGlobalState } from "hooks/useGlobalState";

type TaskProps = {
  taskId: string;
  done: boolean;
  description: string;
};

export const Task = ({ taskId, done, description }: TaskProps): JSX.Element => {
  const { updateTaskCompletion, removeTask } = useGlobalState();

  async function handleTaskUpdate() {
    await updateTaskCompletion(taskId);
  }

  async function handleTaskDeletion() {
    await removeTask(taskId);
  }

  return (
    <li className={styles.task}>
      <CheckBox checked={done} onClick={handleTaskUpdate} />
      <p className={done ? styles.doneDescription : styles.undoneDescription}>
        {description}
      </p>
      <DeleteButton onClick={handleTaskDeletion} />
    </li>
  );
};
