import { formatDistanceToNow } from "date-fns";

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
    className="
      flex
      justify-between
      items-center
      rounded-xl
      border
      border-white/10
      bg-black/20
      px-6
      py-5
      transition
      hover:border-cyan-400/40
      hover:bg-white/5
    "
  >

    <div className="flex items-start gap-4">

      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse mt-2" />

      <div>

        <h3 className="font-semibold text-lg">
          {enquiry.name}
        </h3>

        <p className="text-gray-400">
          {enquiry.email}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Signal received{" "}
          {formatDistanceToNow(
            new Date(enquiry.createdAt),
            { addSuffix: true }
          )}
        </p>

      </div>

    </div>

    <span
      className="
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

))}

      </div>

    </div>
  );
};

export default RecentSignals;