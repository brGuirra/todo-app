import styles from "./task.module.css";

import { CheckBox, DeleteButton } from "components/atoms";

export const Task = (): JSX.Element => {
  return (
    <div className={styles.task}>
      <CheckBox checked={false} />
      <p className={styles.description}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <DeleteButton />
    </div>
  );
};
