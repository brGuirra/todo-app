import "./index.css";

import { App } from "app/app";
import { createRoot } from "react-dom/client";

const environment = process.env.NODE_ENV;

if (environment === "development") {
  import("./mocks").then(({ makeServer }) => makeServer({ environment }));
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(<App />);
} else {
  throw new Error("No container with the name of root found");
}
