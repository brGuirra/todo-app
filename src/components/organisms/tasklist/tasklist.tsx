import styles from "./tasklist.module.css";

import { Info, Task } from "../../molecules";

export const TaskList = () => {
  return (
    <main className={styles.taskList}>
      <Info />
      <ul className={styles.list}>
        <Task />
        <Task />
        <Task />
      </ul>
    </main>
  );
};
