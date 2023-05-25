import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import Hero from "./Hero";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Hero />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
