import hsFootwear from "./lib/hs-footwear";
import taricFootwear from "./lib/taric-footwear";
import htsFootwear from "./lib/hts-footwear";

export function calculator(inputData) {
  const isFootwear = true;
  const system = "TARIC";

  if (isFootwear) {
    if (system === "TARIC") {
      return hsFootwear(inputData, taricFootwear);
    }

    if (system === "HTS") {
      return hsFootwear(inputData, htsFootwear);
    }
  }
}
