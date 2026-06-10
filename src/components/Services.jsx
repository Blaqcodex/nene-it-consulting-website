const services = [
  "Web Development",
  "Custom Software",
  "Cloud Solutions",
  "AI Automation",
  "IT Consulting",
  "Digital Transformation"
];

export default function Services() {
  return (
    <section id="services">

      <h2>Services</h2>

      {services.map((service) => (
        <div key={service}>
          {service}
        </div>
      ))}

    </section>
  );
}