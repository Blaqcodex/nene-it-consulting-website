const EmptyState = ({
  title = "No Contacts Found",
  message = "There are no contacts to display.",
}) => {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-16 text-center">

      <div className="text-6xl mb-6">
        📭
      </div>

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="text-gray-400 mt-3">
        {message}
      </p>

    </div>
  );
};

export default EmptyState;