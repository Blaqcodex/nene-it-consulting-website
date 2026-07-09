const ActionButtons = ({ contact }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition"
        title="View"
      >
        👁
      </button>

      <button
        className="px-3 py-1 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition"
        title="Update Status"
      >
        ✏️
      </button>

      <button
        className="px-3 py-1 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
        title="Delete"
      >
        🗑
      </button>
    </div>
  );
};

export default ActionButtons;