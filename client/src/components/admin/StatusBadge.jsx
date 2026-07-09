const StatusBadge = ({ status }) => {
  const styles = {
    new: "bg-green-500/20 text-green-400",
    contacted: "bg-yellow-500/20 text-yellow-400",
    closed: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status?.toLowerCase()] || "bg-gray-700 text-gray-300"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;