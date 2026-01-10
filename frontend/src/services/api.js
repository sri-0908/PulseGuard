export const fetchPrediction = async () => {
  const res = await fetch(
    "https://ideal-happiness-jj9wqwr4p9rx355jv-5000.app.github.dev/predict"
  );
  return res.json();
};
