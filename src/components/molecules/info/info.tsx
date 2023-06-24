import { InfoLabel } from "components/atoms";
import styles from "./info.module.css";

export const Info = () => {
  return (
    <div className={styles.info}>
      <InfoLabel title="Tarefas criadas" value="5" color="blue" />
      <InfoLabel title="Concluídas" value="2 de 5" color="purple" />
    </div>
  );
};
