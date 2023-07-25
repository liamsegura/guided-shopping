import { Outlet } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import HelpPopup from "./components/HelpPopup";
import EventContext from "./EventContext"; // Import EventProvider and EventContext
import { useContext, useState } from "react"; // Import useContext hook

function App() {
  const { handleOpenForm } = useContext(EventContext); // Use the useContext hook to access handleHelpClick

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    // Toggle the dark-mode class on the body tag
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="App">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HelpPopup onClick={handleOpenForm} darkMode={darkMode} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
