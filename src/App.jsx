// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import About from "./comps/About";
import Projects from "./comps/Project";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Welcome to React Router DOM Demo</h1>
      <p>
        React Router DOM (RRDOM) lets you create **single-page applications** (SPAs) in React
        that feel like traditional multi-page websites. Instead of reloading the entire page,
        you can navigate between components seamlessly.
      </p>
      <p>Use the buttons below to navigate:</p>
      <button onClick={() => navigate("/about")}>Go to About</button>
      <button onClick={() => navigate("/projects")}>Go to Projects</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
