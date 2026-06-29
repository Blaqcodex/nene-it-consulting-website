import enitingData from "../data/enitingData";

export async function getEnitingData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(enitingData);
    }, 300);
  });
}