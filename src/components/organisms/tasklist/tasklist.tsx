import styles from "./tasklist.module.css";

import { Info, Task } from "../../molecules";
import { useGlobalState } from "hooks/useGlobalState";

export const TaskList = () => {
  const { tasks } = useGlobalState();

  function counDoneTasks() {
    return tasks.filter((task) => task.done).length;
  }

  return (
    <main className={styles.taskList}>
      {tasks?.length > 0 ? (
        <>
          <Info
            doneTasksCount={counDoneTasks()}
            totalTasksCount={tasks.length}
          />
          <ul className={styles.list}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                taskId={task.id}
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
