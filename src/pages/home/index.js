import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleJoin = useCallback(() => {
    if (value.trim()) {
      navigate(`/room/${value}`);
    } 
  }, [value, navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Video Call</h1>
      <p style={styles.subtitle}>Join a room by entering the code below</p>
      <div style={styles.form}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Room Code"
          style={styles.input}
        />
        <button onClick={handleJoin} style={styles.button}>
          Join Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default HomePage;
