const SearchBar = ({ value, onChange }) => {
  return (
    <div className="bg-[#111827] rounded-xl border border-gray-800 p-4">
      <input
  type="text"
  value={value}
  onChange={onChange}
  placeholder="Search by name, email or company..."
  className="..."
/>
    </div>
  );
};

export default SearchBar;