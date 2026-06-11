import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    {
      number: "100%",
      label: "Custom Solutions",
    },
    {
      number: "24/7",
      label: "Support",
    },
    {
      number: "AI",
      label: "Driven Innovation",
    },
    {
      number: "∞",
      label: "Scalability",
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
              "
            >
              <h3 className="text-5xl font-black mb-4">
                {stat.number}
              </h3>

              <p className="text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}