import styles from "./info.module.css";

import { InfoLabel } from "components/atoms";

type InfoProps = {
  doneTasksCount: number;
  totalTasksCount: number;
};

export const Info = ({
  doneTasksCount,
  totalTasksCount,
}: InfoProps): JSX.Element => {
  return (
    <div className={styles.info}>
      <InfoLabel
        title="Tarefas criadas"
        value={`${totalTasksCount}`}
        color="blue"
      />
      <InfoLabel
        title="Concluídas"
        value={`${doneTasksCount} de ${totalTasksCount}`}
        color="purple"
      />
    </div>
  );
};
