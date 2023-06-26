export const fetchTasks = (url: string) =>
  fetch(url).then<{ tasks: API.Task[] }>((res) => res.json());
