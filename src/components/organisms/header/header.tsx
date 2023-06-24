import styles from "./header.module.css";

import { Form } from "components/molecules";
import { Logo } from "components/atoms";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.formWrapper}>
        <Form />
      </div>
    </header>
  );
};
