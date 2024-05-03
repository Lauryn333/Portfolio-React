import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <h1>Page App</h1>
      <Outlet />
    </>
  );
}

export default App;
