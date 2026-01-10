function AlertCard({ data }) {
  const color =
    data.risk_level === "High"
      ? "#ff453a"
      : data.risk_level === "Medium"
      ? "#ffd60a"
      : "#32d74b";

  return (
    <div style={{ marginTop: "16px" }}>
      <p className="subtle">Region</p>
      <h2>{data.region}</h2>

      <p className="subtle" style={{ marginTop: "16px" }}>
        Risk Level
      </p>
      <h2 style={{ color }}>{data.risk_level}</h2>

      <p className="subtle" style={{ marginTop: "16px" }}>
        Confidence
      </p>
      <h3>{Math.round(data.confidence * 100)}%</h3>
    </div>
  );
}

export default AlertCard;
