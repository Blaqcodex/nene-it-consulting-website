export default function ENITINGParticles() {

  const particles = Array.from({ length: 10 });

  return (
    <>
      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            "--delay": `${index * 0.3}s`,
            "--size": `${3 + Math.random() * 5}px`,
          }}
        />
      ))}
    </>
  );

}