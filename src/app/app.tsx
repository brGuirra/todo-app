import { CheckBox, DeleteButton, Input, SubmitButton } from "components/atoms";

import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <CheckBox checked={true} />
    </main>
  );
};

export default App;
