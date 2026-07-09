const SearchBar = () => {
  return (
    <div className="bg-[#111827] rounded-xl border border-gray-800 p-4">
      <input
        type="text"
        placeholder="Search contacts..."
        className="w-full bg-transparent outline-none text-white placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBar;