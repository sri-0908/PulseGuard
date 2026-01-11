export default function AlertCard({ title, children }) {
  return (
    <div className="glass card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
