import { useEffect, useState } from "react";
import { fetchPrediction } from "../services/api";
import AlertCard from "./AlertCard";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPrediction().then(setData);
  }, []);

  return (
    <>
      {/* Top Nav */}
      <div
        style={{
          position: "sticky",
          top: 0,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: "rgba(0, 0, 0, 0.6)",
          padding: "20px 60px",
          zIndex: 10,
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <h2 style={{ margin: 0 }}>🛡 PulseGuard</h2>
      </div>

      {/* Main Content */}
      <div style={{ padding: "60px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "8px" }}>
          PulseGuard Dashboard
        </h1>
        <p className="subtle">
          Early Disease Outbreak Intelligence Platform
        </p>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "40px"
          }}
        >
          {/* Status Card */}
          <div className="glass" style={{ padding: "28px" }}>
            <h3>System Status</h3>
            <p className="subtle">Real-time surveillance active</p>
            <p style={{ marginTop: "12px", color: "#30d158" }}>
              ● Live Monitoring
            </p>
          </div>

          {/* Prediction Card */}
          <div className="glass" style={{ padding: "28px" }}>
            <h3>Outbreak Prediction</h3>
            {!data ? (
              <p className="subtle">Analyzing signals…</p>
            ) : (
              <AlertCard data={data} />
            )}
          </div>

          {/* AI Insights */}
          <div className="glass" style={{ padding: "28px" }}>
            <h3>AI Insights</h3>
            <ul className="subtle">
              <li>✔ Symptom spike detected</li>
              <li>✔ Climate correlation applied</li>
              <li>✔ Historical trends compared</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

