import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GetInvolved from "./components/GetInvolved";
import About from "./components/About";
import ListeningSession from "./components/ListeningSession";
import MentalHealthAwareness from "./components/MentalHealthAwareness";
import Donate from "./components/Donate";
import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/get-involved"
            element={<GetInvolved letslistenlogo={logo} />}
          />
          <Route path="/listening-session" element={<ListeningSession />} />
          <Route
            path="/mental-health-awareness"
            element={<MentalHealthAwareness />}
          />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
