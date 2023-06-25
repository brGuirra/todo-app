import { Header, TaskList } from "components/organisms";
import { GlobalStateProvider } from "hooks/useGlobalState";

export const App = (): JSX.Element => {
  return (
    <GlobalStateProvider>
      <Header />
      <TaskList />
    </GlobalStateProvider>
  );
};
