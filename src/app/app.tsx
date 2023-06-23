import { SubmitButton, Input } from "components/atoms";
import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <SubmitButton />
    </main>
  );
};

export default App;
