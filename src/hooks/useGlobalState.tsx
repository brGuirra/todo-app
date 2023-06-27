import { createContext, ReactNode, useContext, useState } from "react";
import useSWR from "swr";

type GlobalContextProps = {
  children: ReactNode;
};

type GlobalContextData = {
  tasks: API.Task[];
  createTask: (description: string) => Promise<void>;
  updateTaskCompletion: (taskId: string) => Promise<void>;
  removeTask: (taskId: string) => Promise<void>;
};

const GlobalStateContext = createContext<GlobalContextData>(
  {} as GlobalContextData
);

export const GlobalStateProvider = ({ children }: GlobalContextProps) => {
  const [tasks, setTasks] = useState<API.Task[]>([]);
  const fecther = async (url: string) => {
    return fetch(url).then<{ tasks: API.Task[] }>((res) => res.json());
  };

  const { data, mutate } = useSWR("/api/tasks", fecther, {
    onSuccess: (data) => setTasks(data.tasks),
  });

  const createTask = async (description: string) => {
    if (!data) return;

    const newTask = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ description }),
    }).then((res) => res.json());

    mutate({
      tasks: [...data.tasks, newTask],
    });
  };

  const updateTaskCompletion = async (taskId: string) => {
    if (!data) return;

    await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
    });

    mutate({
      tasks: data.tasks.map((task) => {
        if (task.id === taskId) {
          task.done = !task.done;
        }

        return task;
      }),
    });
  };

  const removeTask = async (taskId: string) => {
    if (!data) return;

    await fetch(`/api/tasks/${taskId}`, {
      method: "DELETE",
    });

    mutate({
      tasks: data.tasks.filter((task) => task.id === taskId),
    });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        tasks,
        createTask,
        updateTaskCompletion,
        removeTask,
      }}
    >
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
