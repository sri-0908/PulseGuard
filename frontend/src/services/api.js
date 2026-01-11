const API_BASE = import.meta.env.VITE_API_BASE;

export async function fetchPrediction(city) {
  const res = await fetch(`${API_BASE}/predict?city=${city}`);
  if (!res.ok) throw new Error("Backend offline");
  return res.json();
}
