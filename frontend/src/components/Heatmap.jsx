function Heatmap() {
  const regions = [
    { name: "Chennai", risk: 0.8 },
    { name: "Bangalore", risk: 0.5 },
    { name: "Delhi", risk: 0.3 }
  ];

  return (
    <div className="glass" style={{ padding: "28px" }}>
      <h3>Regional Risk Heatmap</h3>
      {regions.map(r => (
        <div key={r.name} style={{ marginTop: "12px" }}>
          {r.name}
          <div
            style={{
              height: "8px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "6px",
              marginTop: "4px"
            }}
          >
            <div
              style={{
                width: `${r.risk * 100}%`,
                height: "100%",
                background:
                  r.risk > 0.7
                    ? "#ff453a"
                    : r.risk > 0.4
                    ? "#ffd60a"
                    : "#30d158",
                borderRadius: "6px"
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Heatmap;
