export const fetchTasks = (url: string) =>
  fetch(url).then<API.Task[]>((res) => res.json());
