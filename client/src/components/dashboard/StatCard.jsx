const StatCard = ({
  title,
  value,
  color = "cyan",
}) => {
  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      transition
      hover:scale-[1.02]
      hover:border-cyan-400/40
      "
    >
      <div className="flex items-center justify-between">

        <p className="text-gray-400">
          {title}
        </p>

        <div
          className={`
          w-3
          h-3
          rounded-full
          animate-pulse
          bg-${color}-400
          `}
        />

      </div>

      <h2 className="text-5xl font-bold mt-5">
        {value}
      </h2>

      <p className="text-gray-500 text-sm mt-4">
        Live Telemetry
      </p>

    </div>
  );
};

export default StatCard;