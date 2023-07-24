import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import ReactGA from "react-ga";

const TRACKING_ID = "G-3Q65LMK3C5";
ReactGA.initialize(TRACKING_ID);

// Ensure the document is available in a browser environment
if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
}
