import { Form } from "components/molecules";

import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Form />
    </main>
  );
};

export default App;
