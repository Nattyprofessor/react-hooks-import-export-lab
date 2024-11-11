import React from "react";
import NavBar from "./NavBar";  // Correct import (same directory)
import Home from "./Home";      // Correct import (same directory)
import About from "./About";    // Correct import (same directory)

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
