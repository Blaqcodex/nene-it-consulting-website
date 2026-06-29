import { useEffect, useState } from "react";

export default function useHeroWaypoints() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    function update() {
      const ids = [
        "logo",
        "engineering",
        "digital",
        "futures",
        "cta"
      ];

      const positions = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return null;

          const rect = element.getBoundingClientRect();

          return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          };
        })
        .filter(Boolean);

      setPoints(positions);
    }

    update();

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return points;
}