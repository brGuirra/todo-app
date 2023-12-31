import styles from "./input.module.css";

import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps): JSX.Element => {
  return <input className={styles.input} type="text" {...props} />;
};
