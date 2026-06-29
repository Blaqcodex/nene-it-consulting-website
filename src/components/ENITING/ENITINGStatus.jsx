export default function ENITINGStatus({ state }) {
  return (
    <span className={`eniting-status ${state}`}>
      {state.toUpperCase()}
    </span>
  );
}