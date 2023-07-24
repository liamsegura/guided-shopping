import { Outlet } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import HelpPopup from "./components/HelpPopup";
import EventContext from "./EventContext"; // Import EventProvider and EventContext
import { useContext } from "react"; // Import useContext hook

function App() {
  const { handleOpenForm } = useContext(EventContext); // Use the useContext hook to access handleHelpClick

  return (
    <>
      <Navbar />
      <HelpPopup onClick={handleOpenForm} />
      {/* Pass the handleHelpClick function to HelpPopup */}
      <div className="App" style={{ backgroundColor: "white" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
