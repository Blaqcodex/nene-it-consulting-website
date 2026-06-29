import { useEffect, useState } from "react";

export default function useENITINGMovement(points) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!points.length) return;

    const timer = setInterval(() => {
      setIndex((previous) => (previous + 1) % points.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [points]);

  return points[index];
}