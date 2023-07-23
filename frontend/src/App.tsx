import { Outlet } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import HelpPopup from "./components/HelpPopup";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <HelpPopup />
      <div className="App" style={{ backgroundColor: "white" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
