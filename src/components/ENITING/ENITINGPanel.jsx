import ENITINGStatus from "./ENITINGStatus";

export default function ENITINGPanel({ item }) {
  return (
    <div className="eniting-panel">

      <ENITINGStatus state={item.state} />

      <h3>{item.title}</h3>

      <p>{item.description}</p>

    </div>
  );
}