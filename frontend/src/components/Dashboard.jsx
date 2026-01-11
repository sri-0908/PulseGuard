import { useEffect, useState } from "react";
import { fetchPrediction } from "../services/api";
import AlertCard from "./AlertCard";

export default function Dashboard({ onLogout }) {
  const [city, setCity] = useState("Chennai");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPrediction(city)
      .then(setData)
      .catch(() => setData(null));
  }, [city]);

  return (
    <>
      <div className="topbar">
        <h2>🛡 PulseGuard</h2>
        <button className="logout" onClick={onLogout}>Logout</button>
      </div>

      <div className="container">
        <h1>PulseGuard Dashboard</h1>
        <p className="subtle">Early Disease Outbreak Intelligence Platform</p>

        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>London</option>
          <option>New York</option>
          <option>Tokyo</option>
        </select>

        <div className="grid">
          <AlertCard title="System Status">
            {data ? "Live Monitoring" : "Backend Offline"}
          </AlertCard>

          <AlertCard title="Outbreak Prediction">
            {data ? (
              <>
                <p>City: {data.city}</p>
                <p>Risk Score: {data.risk_score}</p>
                <p>
                  Alert Level:{" "}
                  <strong className={data.alert_level.toLowerCase()}>
                    {data.alert_level}
                  </strong>
                </p>
                <p>Trend: {data.trend}</p>
              </>
            ) : (
              "Loading..."
            )}
          </AlertCard>

          <AlertCard title="AI Insights">
            {data?.insights?.length ? (
              <ul>
                {data.insights.map((i, idx) => (
                  <li key={idx}>✔ {i}</li>
                ))}
              </ul>
            ) : (
              "No insights available"
            )}
          </AlertCard>
        </div>
      </div>
    </>
  );
}
