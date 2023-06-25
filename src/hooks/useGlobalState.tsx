import { createContext, ReactNode, useContext } from "react";
import { fetchTasks } from "../fetchers";
import useSWR from "swr";

type GlobalContextProps = {
  children: ReactNode;
};

type GlobalContextData = {
  tasks: API.Task[];
};

const GlobalStateContext = createContext<GlobalContextData>({
  tasks: [],
});

export const GlobalStateProvider = ({ children }: GlobalContextProps) => {
  const { data } = useSWR("/api/tasks", fetchTasks);

  return (
    <GlobalStateContext.Provider value={{ tasks: data || [] }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const ctx = useContext(GlobalStateContext);

  if (!ctx) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }

  return ctx;
};
