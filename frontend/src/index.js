import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { EventProvider } from "./EventContext";

// Ensure the document is available in a browser environment
if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <EventProvider>
          <RouterProvider router={router} />
        </EventProvider>
      </React.StrictMode>
    );
  }
}
