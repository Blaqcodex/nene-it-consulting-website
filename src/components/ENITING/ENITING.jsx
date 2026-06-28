import "./ENITING.css";

import ENITINGCore from "./ENITINGCore";
import ENITINGRing from "./ENITINGRing";
import ENITINGEye from "./ENITINGEye";
import ENITINGParticles from "./ENITINGParticles";

export default function ENITING() {
  return (
    <div className="eniting">

      <ENITINGParticles />

      <ENITINGRing />

      <ENITINGCore />

      <ENITINGEye />

    </div>
  );
}