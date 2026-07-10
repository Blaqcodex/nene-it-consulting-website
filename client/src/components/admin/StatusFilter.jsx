const StatusFilter = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-[#111827] border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-cyan-500"
    >
      <option value="">All Statuses</option>
      <option value="New">New</option>
      <option value="Contacted">Contacted</option>
      <option value="Closed">Closed</option>
    </select>
  );
};

export default StatusFilter;