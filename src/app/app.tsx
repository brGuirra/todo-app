import { Input } from "components/atoms";
import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Input placeholder="Adicione uma tarefa" />
    </main>
  );
};

export default App;
