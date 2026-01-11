import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");

  return (
    <div className="login-container">
      <h1>PulseGuard</h1>
      <p>Early Disease Outbreak Intelligence</p>

      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={onLogin}>Login</button>
    </div>
  );
}
