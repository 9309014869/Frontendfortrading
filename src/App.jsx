import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home2 from "./Pages/Home2";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Home2 />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>

    
  );
}

export default App;
