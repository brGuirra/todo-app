import styles from "./info.module.css";

import { InfoLabel } from "components/atoms";

export const Info = (): JSX.Element => {
  return (
    <div className={styles.info}>
      <InfoLabel title="Tarefas criadas" value="5" color="blue" />
      <InfoLabel title="Concluídas" value="2 de 5" color="purple" />
    </div>
  );
};
