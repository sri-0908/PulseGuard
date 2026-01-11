import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  return loggedIn ? (
    <Dashboard
      onLogout={() => {
        localStorage.clear();
        setLoggedIn(false);
      }}
    />
  ) : (
    <Login
      onLogin={() => {
        localStorage.setItem("loggedIn", "true");
        setLoggedIn(true);
      }}
    />
  );
}
