const MissionAnalytics = ({ analytics }) => {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <div className="mb-8">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
          Mission Analytics
        </p>

        <h2 className="text-2xl font-bold text-white mt-2">
          Business Performance
        </h2>

        <p className="text-gray-400 mt-2">
          Live operational insights from Mission Control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="rounded-xl bg-black/20 border border-white/10 p-5">
          <p className="text-gray-400">Today's Signals</p>
          <h3 className="text-4xl font-bold mt-3">
            {analytics.today}
          </h3>
        </div>

        <div className="rounded-xl bg-black/20 border border-white/10 p-5">
          <p className="text-gray-400">This Week</p>
          <h3 className="text-4xl font-bold mt-3">
            {analytics.thisWeek}
          </h3>
        </div>

        <div className="rounded-xl bg-black/20 border border-white/10 p-5">
          <p className="text-gray-400">This Month</p>
          <h3 className="text-4xl font-bold mt-3">
            {analytics.thisMonth}
          </h3>
        </div>

        <div className="rounded-xl bg-black/20 border border-white/10 p-5">
          <p className="text-gray-400">Conversion Rate</p>
          <h3 className="text-4xl font-bold mt-3 text-cyan-400">
            {analytics.conversionRate}%
          </h3>
        </div>

      </div>

    </div>
  );
};

export default MissionAnalytics;