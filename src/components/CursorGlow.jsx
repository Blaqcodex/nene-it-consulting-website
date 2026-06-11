import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMouse);

    return () =>
      window.removeEventListener(
        "mousemove",
        updateMouse
      );
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(161,0,255,0.18), transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}