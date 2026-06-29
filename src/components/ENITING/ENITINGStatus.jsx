export default function ENITINGStatus({ status }) {

  return (

    <span className={`eniting-status ${status?.toLowerCase()}`}>

      {(status ?? "OFFLINE").toUpperCase()}

    </span>

  );

}