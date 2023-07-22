import { Outlet } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default App;
