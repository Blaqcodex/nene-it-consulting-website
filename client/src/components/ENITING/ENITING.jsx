import { motion } from "framer-motion";

import ENITINGPanel from "./ENITINGPanel";

import useHeroWaypoints from "../../hooks/useHeroWaypoints";

import useENITINGMovement from "../../hooks/useENITINGMovement";

import { getEnitingData } from "../../services/enitingService";

import { useEffect, useState } from "react";

export default function ENITING() {

  const points = useHeroWaypoints();

  const destination = useENITINGMovement(points);

  const [data, setData] = useState([]);

  const [index, setIndex] = useState(0);

  useEffect(() => {

    getEnitingData().then(setData);

  }, []);

  useEffect(() => {

    if (!data.length) return;

    const timer = setInterval(() => {

      setIndex((i) => (i + 1) % data.length);

    }, 3500);

    return () => clearInterval(timer);

  }, [data]);

  if (!destination || !data.length) return null;

  return (

    <motion.div

      className="eniting-wrapper"

      animate={{

        x: destination.x,

        y: destination.y

      }}

      transition={{

        duration:1.5,

        ease:"easeInOut"

      }}

    >

      <div className="eniting">

        🤖

      </div>

      <ENITINGPanel item={data[index]} />

    </motion.div>

  );

}