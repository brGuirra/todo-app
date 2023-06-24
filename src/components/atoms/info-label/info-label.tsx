import styles from "./info-label.module.css";

type InfoLabelProps = {
  title: string;
  value: string;
  color: "blue" | "purple";
};

export const InfoLabel = ({
  title,
  value,
  color,
}: InfoLabelProps): JSX.Element => {
  return (
    <div className={styles.infoLabel}>
      <span className={styles[color]}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
