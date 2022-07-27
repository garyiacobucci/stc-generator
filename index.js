import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById('root')
const root = createRoot(container);
import App from "./src/App"
import { UserContextProvider } from "./src/UserContext";

root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
  );