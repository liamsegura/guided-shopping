import { Outlet } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import HelpPopup from "./components/HelpPopup";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID = "G-3Q65LMK3C5";
ReactGA.initialize(TRACKING_ID);

function App() {
  const location = useLocation();

  useEffect(() => {
    // Track pageview when the component is mounted
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

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
