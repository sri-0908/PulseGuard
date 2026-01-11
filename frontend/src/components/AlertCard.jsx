function AlertCard({ data }) {
  const color =
    data.level === "High"
      ? "#ff453a"
      : data.level === "Medium"
      ? "#ffd60a"
      : "#30d158";

  return (
    <div>
      <p>
        <strong>Region:</strong> {data.region}
      </p>
      <p>
        <strong>Risk Score:</strong> {data.risk_score}
      </p>
      <p style={{ color }}>
        <strong>Alert Level:</strong> {data.level}
      </p>
      <p>
        <strong>Trend:</strong> {data.trend}
      </p>
    </div>
  );
}

export default AlertCard;
