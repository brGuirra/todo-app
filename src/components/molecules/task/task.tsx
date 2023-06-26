import styles from "./task.module.css";

import { CheckBox, DeleteButton } from "components/atoms";

type TaskProps = {
  done: boolean;
  description: string;
};

export const Task = ({ done, description }: TaskProps): JSX.Element => {
  return (
    <li className={styles.task}>
      <CheckBox checked={done} />
      <p className={done ? styles.doneDescription : styles.undoneDescription}>
        {description}
      </p>
      <DeleteButton />
    </li>
  );
};
