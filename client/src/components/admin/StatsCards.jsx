const stats = [
  {
    title: "Total Leads",
    value: 148,
    color: "text-cyan-400",
  },
  {
    title: "New Today",
    value: 6,
    color: "text-green-400",
  },
  {
    title: "Contacted",
    value: 104,
    color: "text-yellow-400",
  },
  {
    title: "Closed",
    value: 38,
    color: "text-purple-400",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition duration-300"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wide">
            {stat.title}
          </p>

          <h2 className={`text-4xl font-bold mt-4 ${stat.color}`}>
            {stat.value}
          </h2>
        </div>
      ))}

    </div>
  );
};

export default StatsCards;