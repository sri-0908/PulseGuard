const API_BASE =
  "https://ideal-happiness-jj9wqwr4p9rx355jv-5000.app.github.dev";

// Fetch outbreak prediction
export async function fetchPrediction() {
  const res = await fetch(`${API_BASE}/predict`);
  if (!res.ok) {
    throw new Error("Backend not reachable");
  }
  return res.json();
}

// Health check for live monitoring
export async function checkHealth() {
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) {
    throw new Error("Health check failed");
  }
  return res.json();
}
