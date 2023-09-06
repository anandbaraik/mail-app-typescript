import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { MailProvider } from "./context/MailProvider";

// ! is called the "non-null assertion operator." When you see it used after an expression, like in document.getElementById("root")!, it tells TypeScript to assert that the expression is not null or undefined.
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <MailProvider>
        <App />
      </MailProvider>
    </Router>
  </StrictMode>
);
