import styles from "./tasklist.module.css";

import { Info, Task } from "../../molecules";
import { useGlobalState } from "hooks/useGlobalState";

export const TaskList = () => {
  const { tasks } = useGlobalState();

  return (
    <main className={styles.taskList}>
      {tasks?.length > 0 ? (
        <>
          <Info doneTasksCount={2} totalTasksCount={tasks.length} />
          <ul className={styles.list}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                done={task.done}
                description={task.description}
              />
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
};
