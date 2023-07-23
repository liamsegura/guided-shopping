import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

// Ensure the document is available in a browser environment
if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    /* @ts-ignore */
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
}
