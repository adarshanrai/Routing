// comps/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
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
  const cardStyle = {
    backgroundColor: "#e3f2fd",
    borderRadius: "10px",
    padding: "20px",
    margin: "15px 0",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  };

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

  const cardHover = (e) => {
    e.target.style.transform = "translateY(-5px)";
    e.target.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
  };
  const cardLeave = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "0 3px 8px rgba(0,0,0,0.1)";
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Projects</h1>

      <div
        style={cardStyle}
        onMouseEnter={cardHover}
        onMouseLeave={cardLeave}
      >
        <h2>Utakaibu</h2>
        <p style={paragraphStyle}>A song finder built using the Spotify API.</p>
      </div>

      <div
        style={cardStyle}
        onMouseEnter={cardHover}
        onMouseLeave={cardLeave}
      >
        <h2>Lost & Found Website</h2>
        <p style={paragraphStyle}>Currently under development.</p>
      </div>

      <div>
        <button
          style={buttonStyle}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
          onClick={() => navigate("/about")}
        >
          Go to About
        </button>
      </div>
    </div>
  );
};

export default Projects;
