export default function ENITINGStatus({ status = "OFFLINE" }) {
  return (
    <span className={`eniting-status ${status.toLowerCase()}`}>
      ● {status}
    </span>
  );
}