import styles from "./checkbox.module.css";

import { CheckCircle, Circle } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";

type CheckBoxProps = {
  checked: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CheckBox = ({ checked, ...props }: CheckBoxProps) => {
  return (
    <button
      type="button"
      className={`${styles.checkbox} ${
        checked ? styles.checked : styles.unchecked
      }`}
      {...props}
    >
      {checked ? <CheckCircle size={24} weight="fill" /> : <Circle size={24} />}
    </button>
  );
};
