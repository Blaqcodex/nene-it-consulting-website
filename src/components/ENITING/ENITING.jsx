import "./ENITING.css";

import ENITINGCore from "./ENITINGCore";
import ENITINGEye from "./ENITINGEye";
import ENITINGRing from "./ENITINGRing";
import ENITINGParticles from "./ENITINGParticles";
import ENITINGPanel from "./ENITINGPanel";

import heroBotMessages from "../../data/enitingData";

export default function ENITING() {

  const current = heroBotMessages[0];

  return (

    <div className="eniting-wrapper">

      <ENITINGPanel
        title={current.title}
        description={current.description}
      />

      <div className="eniting">

        <ENITINGParticles/>

        <ENITINGRing/>

        <ENITINGCore/>

        <ENITINGEye/>

      </div>

    </div>

  );

}