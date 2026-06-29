import enitingKnowledge from "../data/enitingKnowledge";

export async function getEnitingData() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(enitingKnowledge);

    }, 400);

  });

}