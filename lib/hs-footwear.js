import { getQuestion, getAnswer, createResult } from "../questions/index.js";

function handleWaterProof(inputData, systemSpecificCallback) {
  let answer = getAnswer(inputData, "waterProof");
  let processAnswer = getAnswer(inputData, "process");
  if (!answer) {
    return createResult("", getQuestion("waterProof"));
  }
  if (
    answer === "yes" &&
    (processAnswer === "moccasins" ||
      processAnswer === "handStiched" ||
      processAnswer === "direct injection process")
  ) {
    return handleToeCap6401(inputData, systemSpecificCallback);
  } else {
    return handleWinterSports6402(inputData, systemSpecificCallback);
  }
}
function handleToeCap6401(inputData, systemSpecificCallback) {
  let answer = getAnswer(inputData, "toeCap");

  if (!answer) {
    return createResult("6401", getQuestion("toeCap"));
  }
  if (answer === "yes") {
    return systemSpecificCallback(inputData, "640110");
  } else if (getAnswer(inputData, "toeCap") === "no") {
    return handleShaft6401(inputData, systemSpecificCallback);
  }
}
function handleShaft6401(inputData, systemSpecificCallback) {
  let answer = getAnswer(inputData, "shaft");
  if (!answer) {
    return createResult("6401", getQuestion("shaft"));
  }
  if (answer === "ankle") {
    return systemSpecificCallback(inputData, "640192");
  } else if (answer === "knee" || answer === "other") {
    return systemSpecificCallback(inputData, "640199");
  }
}
function handleWinterSports6402(inputData, systemSpecificCallback) {
  let answer = getAnswer(inputData, "winterSports");

  if (!answer) {
    return createResult("6402", getQuestion("winterSports"));
  }
  if (answer === "yes") {
    return handleSkiBoots6402(inputData, systemSpecificCallback);
  } else if (answer === "no") {
    return handleUpperStrapsOrThongs6402(inputData, systemSpecificCallback);
  }
}
function handleSkiBoots6402(inputData, systemSpecificCallback) {
  let answer = getAnswer(inputData, "skiBoots");

  if (!answer) {
    return createResult("6402", getQuestion("skiBoots"));
  }
  if (answer === "skiBoots" || answer === "snowboardBoots") {
    return systemSpecificCallback(inputData, "640212");
  } else if (answer === "other") {
    return systemSpecificCallback(inputData, "640219");
  }
}
function handleUpperStrapsOrThongs6402(inputData, systemSpecificCallback) {
  let answer = getAnswer(inputData, "upperStrapsOrThongs");

  if (!answer) {
    return createResult("6402", getQuestion("upperStrapsOrThongs"));
  }
  if (answer === "yes") {
    return systemSpecificCallback(inputData, "640220");
  } else if (answer === "no") {
    return handleShaft6402(inputData, systemSpecificCallback);
  }
}

function handleShaft6402(inputData, systemSpecificCallback) {
  let answer = getAnswer(inputData, "shaft");

  if (!answer) {
    return createResult("6402", getQuestion("shaft"));
  }
  if (answer === "ankle") {
    return systemSpecificCallback(inputData, "640291");
  } else if (answer !== "ankle") {
    return systemSpecificCallback(inputData, "640299");
  }
}

function handleShaftLeatherstrapsFalse6403(inputData, systemSpecificCallback) {
  const answer = getAnswer(inputData, "shaft");
  if (!answer) {
    return createResult("640351", getQuestion("shaft"));
  }
  if (answer === "ankle" || answer === "knee") {
    return systemSpecificCallback(inputData, "640351");
  } else if (answer === "other") {
    return systemSpecificCallback(inputData, "640359");
  }
}

function leatherStraps6403(inputData, systemSpecificCallback) {
  const answer = getAnswer(inputData, "leatherStraps");
  if (!answer) {
    return createResult("6403", getQuestion("leatherStraps"));
  }
  if (answer === "yes") {
    return systemSpecificCallback(inputData, "640320");
  } else if (answer === "no") {
    return handleShaftLeatherstrapsFalse6403(inputData, systemSpecificCallback);
  }
}

function shaft6403(inputData, systemSpecificCallback) {
  const answer = getAnswer(inputData, "shaft");
  if (!answer) {
    return createResult("6403", getQuestion("shaft"));
  }
  if (answer === "ankle" || answer === "knee") {
    return systemSpecificCallback(inputData, "640391");
  } else if (answer === "other") {
    return systemSpecificCallback(inputData, "6403xx");
  }
}

function handleToeCap6403(inputData, systemSpecificCallback) {
  const answer = getAnswer(inputData, "toeCap");
  if (!answer) {
    return createResult("6403", getQuestion("toeCap"));
  }
  if (answer === "yes") {
    return systemSpecificCallback(inputData, "640340");
  } else if (answer === "no") {
    return shaft6403(inputData, systemSpecificCallback);
  }
}

function handleSport6404(inputData, systemSpecificCallback) {
  const answer = getAnswer(inputData, "sports");
  if (!answer) {
    return createResult("6404", getQuestion("sports"));
  }
  if (answer === "yes") {
    return systemSpecificCallback(inputData, "640411");
  } else if (answer === "no") {
    return systemSpecificCallback(inputData, "640419");
  }
}
export default function hsFootwear(inputData, systemSpecificCallback) {
  if (!inputData.questionAnswers) {
    return createResult("", getQuestion("footwearOrComponents"));
  }

  if (getAnswer(inputData, "footwearOrComponents") === "footwear") {
    if (!getAnswer(inputData, "upperType")) {
      return createResult("", getQuestion("upperType"));
    }

    if (!getAnswer(inputData, "sole")) {
      return createResult("", getQuestion("sole"));
    }
    const soleAnswer = getAnswer(inputData, "sole");
    const upperTypeAnswer = getAnswer(inputData, "upperType");
    if (
      (upperTypeAnswer === "rubber" || upperTypeAnswer === "plastic") &&
      (soleAnswer === "plastic" || soleAnswer === "rubber")
    ) {
      const answer = getAnswer(inputData, "process");
      if (!answer) {
        return createResult("", getQuestion("process"));
      }
      if (getAnswer(inputData, "process")) {
        return handleWaterProof(inputData, systemSpecificCallback);
      }
    } else {
      if (
        upperTypeAnswer === "leather" &&
        soleAnswer !== "other" &&
        soleAnswer !== "wood"
      ) {
        if (soleAnswer === "leather") {
          return leatherStraps6403(inputData, systemSpecificCallback);
        } else if (soleAnswer !== "leather") {
          return handleToeCap6403(inputData, systemSpecificCallback);
        }
      } else {
        if (
          upperTypeAnswer === "textile" &&
          soleAnswer !== "other" &&
          soleAnswer !== "wood"
        ) {
          if (soleAnswer === "leather" || soleAnswer === "immitationLeather") {
            return systemSpecificCallback(inputData, "640420");
          } else if (soleAnswer === "plastic" || soleAnswer === "rubber") {
            return handleSport6404(inputData, systemSpecificCallback);
          }
        } else {
          if (upperTypeAnswer === "leather") {
            return systemSpecificCallback(inputData, "640510");
          } else {
            if (upperTypeAnswer === "textile") {
              return systemSpecificCallback(inputData, "640520");
            } else {
              return systemSpecificCallback(inputData, "640590");
            }
          }
        }
      }
    }

    /*  if (resultSoFar === "640310") {
    return systemSpecificCallback(inputData, "640310");
  } */
  }
}
