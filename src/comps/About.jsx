// comps/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = { color: "#1a73e8", textAlign: "center" };
  const paragraphStyle = { fontSize: "16px", lineHeight: "1.5" };
  const buttonStyle = {
    margin: "10px 10px 0 0",
    padding: "10px 20px",
    backgroundColor: "#1a73e8",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.2s",
  };

  const buttonHover = (e) => (e.target.style.backgroundColor = "#155ab6");
  const buttonLeave = (e) => (e.target.style.backgroundColor = "#1a73e8");

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <p style={paragraphStyle}>
        My name is <strong>Adarshan Rai</strong>. and I hate Git.
      </p>
      <p style={paragraphStyle}>
        React Router DOM is a library that allows React apps to have navigation without full page reloads.
        It works by mapping URLs to React components (routes), allowing a smooth single-page app experience.
      </p>
      <p style={paragraphStyle}>
        In this demo, "Home", "About", and "Projects" pages are separate routes managed by React Router DOM.
      </p>
      <div>
        <button
          style={buttonStyle}
          onMouseEnter={buttonHover}
         
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={buttonHover}
          
          onClick={() => navigate("/projects")}
        >
          Go to Projects
        </button>
      </div>
    </div>
  );
};

export default About;
