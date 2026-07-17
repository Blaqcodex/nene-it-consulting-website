import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const sampleData = [
  { day: "Mon", enquiries: 2 },
  { day: "Tue", enquiries: 5 },
  { day: "Wed", enquiries: 3 },
  { day: "Thu", enquiries: 7 },
  { day: "Fri", enquiries: 4 },
  { day: "Sat", enquiries: 6 },
  { day: "Sun", enquiries: 5 },
];

const EnquiriesChart = () => {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <div className="mb-8">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
          Mission Analytics
        </p>

        <h2 className="text-2xl font-bold text-white mt-2">
          Enquiries Trend
        </h2>

        <p className="text-gray-400 mt-2">
          Weekly activity across Mission Control.
        </p>
      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={sampleData}>

            <CartesianGrid
              stroke="#1f2937"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="day"
              stroke="#9ca3af"
            />

            <YAxis
              stroke="#9ca3af"
            />

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #22d3ee",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="enquiries"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#22d3ee",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default EnquiriesChart;