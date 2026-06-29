import ENITINGStatus from "./ENITINGStatus";

export default function ENITINGPanel({ item }) {
  return (
    <div className="eniting-panel">

      <div className="panel-header">

        <h2>ENITING AI</h2>

        <ENITINGStatus status={item.status} />

      </div>

      <div className="panel-section">

        <small>MISSION</small>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

      </div>

      <div className="panel-section">

        <small>TECH STACK</small>

        <ul>

          {item.tech.map((tech) => (

            <li key={tech}>{tech}</li>

          ))}

        </ul>

      </div>

      <div className="panel-section">

        <small>CONFIDENCE</small>

        <strong>{item.confidence}%</strong>

      </div>

    </div>
  );
}