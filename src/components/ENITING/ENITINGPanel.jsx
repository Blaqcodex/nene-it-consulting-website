export default function ENITINGPanel({ title, description }) {
  return (
    <div className="eniting-panel">
      <span className="eniting-status">
        ● ONLINE
      </span>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}