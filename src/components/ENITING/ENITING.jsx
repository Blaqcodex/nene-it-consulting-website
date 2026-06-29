import { useEffect, useState } from "react";

import "./ENITING.css";

import ENITINGCore from "./ENITINGCore";
import ENITINGEye from "./ENITINGEye";
import ENITINGRing from "./ENITINGRing";
import ENITINGPanel from "./ENITINGPanel";

import { getEnitingData } from "../../services/enitingService";

export default function ENITING() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await getEnitingData();
      setItem(data[0]);
    }

    loadData();
  }, []);

  if (!item) return null;

  return (
    <div className="eniting-wrapper">

      <ENITINGPanel item={item} />

      <div className="eniting">

        <ENITINGRing />

        <ENITINGCore />

        <ENITINGEye />

      </div>

    </div>
  );
}