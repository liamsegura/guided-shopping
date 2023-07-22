import { Outlet } from "react-router-dom";
import "./App.css";
import { Heading } from "./styles";

function App() {
  return (
    <>
      <Heading>WORKOUT TRACKER</Heading>
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default App;
