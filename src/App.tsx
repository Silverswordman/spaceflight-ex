import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSpace from "./Components/Navbarspace";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App bg-dark-subtle ">
      <NavbarSpace />
      <Home></Home>
    </div>
  );
}

export default App;
