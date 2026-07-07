const RecentSignals = ({ enquiries }) => {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <h2 className="text-2xl font-bold">
        Recent Signals
      </h2>

      <p className="text-gray-400 mt-2">
        Latest activity detected by Mission Control.
      </p>

      <div className="mt-8 space-y-4">

        {enquiries.map((enquiry) => (

          <div
            key={enquiry._id}
            className="flex justify-between items-center border-b border-white/10 pb-4"
          >

            <div>

              <h3 className="font-semibold">
                {enquiry.name}
              </h3>

              <p className="text-sm text-gray-400">
                {enquiry.email}
              </p>

            </div>

            <div className="text-right">

              <span
                className="
                inline-block
                px-3
                py-1
                rounded-full
                bg-cyan-500/20
                text-cyan-300
                text-sm
                "
              >
                {enquiry.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentSignals;