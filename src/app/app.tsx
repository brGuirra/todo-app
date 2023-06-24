import { DeleteButton, Input, SubmitButton } from "components/atoms";

import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <DeleteButton />
    </main>
  );
};

export default App;
