import { Logo } from "components/atoms";
import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Logo />
    </main>
  );
};

export default App;
