import { getQuestion, getQuestionOld } from "./questions/index.js";

//
function getAnswer(inputData, key) {
  if (inputData.questionAnswers) {
    for (const a of inputData.questionAnswers) {
      if (a.questionKey === key) {
        return a.answerKey;
      }
    }
  }
  return null;
}

function createResult(code, question) {
  if (question) {
    return {
      question,
      code,
      partial: true,
    };
  }

  return {
    code,
    partial: false,
  };
}
//

function handleShaft6401(inputData) {
  let answer = getAnswer(inputData, "shaft");
  if (!answer) {
    return createResult("6401", getQuestion("shaft"));
  }
  if (answer === "ankle") {
    return createResult("6401921000");
  } else if (answer === "knee") {
    return createResult("6401990010");
  } else if (answer === "other") {
    return createResult("6401990090");
  }
}
function handleSkiBoots6402(inputData) {
  let answer = getAnswer(inputData, "skiBoots");

  if (!answer) {
    return createResult("6402", getQuestion("skiBoots"));
  }

  if (answer === "skiBoots") {
    return createResult("6402121000");
  } else if (answer === "snowboardBoots") {
    return createResult("6402129000");
  } else if (answer === "other") {
    return createResult("6402190000");
  }
}
function handleToeCap6401(inputData) {
  let answer = getAnswer(inputData, "toeCap");

  if (!answer) {
    return createResult("6401", getQuestion("toeCap"));
  }
  if (answer === "yes") {
    return createResult("6401100000");
  } else if (getAnswer(inputData, "toeCap") === "no") {
    return handleShaft6401(inputData);
  }
}
function handleToeCap640291(inputData) {
  let answer = getAnswer(inputData, "toeCap");

  if (!answer) {
    return createResult("640291", getQuestion("toeCap"));
  }
  if (answer === "yes") {
    return createResult("6402911000");
  } else if (answer === "no") {
    return createResult("6402919000");
  }
}
function handleHeightOfSoleAndHeel640299(inputData) {
  const answer = getAnswer(inputData, "heightOfSoleAndHeel");
  if (!answer) {
    return createResult("640299", getQuestion("heightOfSoleAndHeel"));
  }
  if (answer === "yes") {
    return createResult("6402993100");
  } else if (answer === "no") {
    return createResult("6402993900");
  }
}
function handleGenderType640299(inputData) {
  const answer = getAnswer(inputData, "genderType");
  if (!answer) {
    return createResult("640299", getQuestion("genderType"));
  }
  if (answer === "women") {
    return createResult("6402999800");
  } else if (answer === "men") {
    return createResult("6402999600");
  } else if (answer === "unisex") {
    return createResult("6402999300");
  }
  return createResult(code);
}
function handleInsoleLength640299(inputData) {
  const answer = getAnswer(inputData, "lengthOfInsole");
  if (!answer) {
    return createResult("640299", getQuestion("lengthOfInsole"));
  }
  if (answer === "yes") {
    return handleGenderType640299(inputData);
  } else if (answer === "no") {
    return createResult("6402999100");
  }
}
function handleVamp640299(inputData) {
  let answer = getAnswer(inputData, "vamp");
  if (!answer) {
    return createResult("640299", getQuestion("vamp"));
  }
  if (answer === "yes") {
    return handleHeightOfSoleAndHeel640299(inputData);
  } else if (answer === "no") {
    return handleInsoleLength640299(inputData);
  }
}
function handleSlippers640299(inputData) {
  let answer = getAnswer(inputData, "slippers");
  if (!answer) {
    return createResult("640299", getQuestion("slippers"));
  }
  if (answer === "yes") {
    return createResult("6402995000");
  } else if (answer === "no") {
    return handleVamp640299(inputData);
  }
}
function handleRubberOrPlastic640299(inputData) {
  let upperAnswer = getAnswer(inputData, "upperType");
  if (upperAnswer === "rubber") {
    return createResult("6402991000");
  } else if (upperAnswer === "plastic") {
    return handleSlippers640299(inputData);
  }
}
function handleToeCap640299(inputData) {
  let answer = getAnswer(inputData, "toeCap");

  if (!answer) {
    return createResult("640299", getQuestion("toeCap"));
  }
  if (answer === "yes") {
    return createResult("6402990500");
  } else if (answer === "no") {
    return handleRubberOrPlastic640299(inputData);
  }
}

function handleShaft6402(inputData) {
  let answer = getAnswer(inputData, "shaft");

  if (!answer) {
    return createResult("6402", getQuestion("shaft"));
  }
  if (answer === "ankle") {
    return handleToeCap640291(inputData);
  } else if (answer !== "ankle") {
    return handleToeCap640299(inputData);
  }
}
function handleUpperStrapsOrThongs6402(inputData) {
  let answer = getAnswer(inputData, "upperStrapsOrThongs");

  if (!answer) {
    return createResult("6402", getQuestion("upperStrapsOrThongs"));
  }
  if (answer === "yes") {
    return createResult("6402200000");
  } else if (answer === "no") {
    return handleShaft6402(inputData);
  }
}
function handleWinterSports6402(inputData) {
  let answer = getAnswer(inputData, "winterSports");

  if (!answer) {
    return createResult("6402", getQuestion("winterSports"));
  }
  if (answer === "yes") {
    return handleSkiBoots6402(inputData);
  } else if (answer === "no") {
    return handleUpperStrapsOrThongs6402(inputData);
  }
}
function handleWaterProof(inputData) {
  let answer = getAnswer(inputData, "waterProof");
  if (!answer) {
    return { question: getQuestion("waterProof"), code: "", partial: true };
  }
  if (
    answer === "yes" &&
    (getAnswer(inputData, "process") === "moccasins" ||
      getAnswer(inputData, "process") === "hand stiched" ||
      getAnswer(inputData, "process") === "direct injection process")
  ) {
    return handleToeCap6401(inputData);
  } else if (
    answer === "no" &&
    (getAnswer(inputData, "process") === "moccasins" ||
      getAnswer(inputData, "process") === "hand stiched" ||
      getAnswer(inputData, "process") === "direct injection process")
  ) {
    return handleWinterSports6402(inputData);
  }
}

function handleSlippers64040(inputData) {
  const answer = getAnswer(inputData, "slippers");
  if (!answer) {
    return createResult("640420", getQuestion("slippers"));
  }
  if (answer === "yes") {
    return createResult("6404201000");
  } else if (answer === "no") {
    return createResult("6404209000");
  }
}
function handleSlippers640419(inputData) {
  const answer = getAnswer(inputData, "slippers");
  if (!answer) {
    return createResult("640419", getQuestion("slippers"));
  }
  if (answer === "yes") {
    return createResult("6404191000");
  } else if (answer === "no") {
    return createResult("6404199000");
  }
}
function handleSport6404(inputData) {
  const answer = getAnswer(inputData, "sports");
  if (!answer) {
    return createResult("6404", getQuestion("sports"));
  }
  if (answer === "yes") {
    return createResult("6404110000");
  } else if (answer === "no") {
    return handleSlippers640419(inputData);
  }
}
function handleSlippers640520(inputData) {
  const answer = getAnswer(inputData, "slippers");
  if (!answer) {
    return createResult("640520", getQuestion("slippers"));
  }
  if (answer === "yes") {
    return createResult("6405209100");
  } else if (answer === "no") {
    return createResult("6405209900");
  }
}
function handmade640351(inputData) {
  const answer = getAnswer(inputData, "handmade");
  if (!answer) {
    return createResult("640351", getQuestion("handmade"));
  }
  if (answer === "yes") {
    return createResult("6403510510");
  }
  if (answer === "no") {
    return createResult("6403510590");
  }
}
function handleGenderTypeWithShaftAnkle640351(inputData) {
  const answer = getAnswer(inputData, "genderType");
  if (!answer) {
    return createResult("640351", getQuestion("genderType"));
  }
  if (answer === "women") {
    return createResult("6403519900");
  }
  if (answer === "men") {
    return createResult("6403519500");
  }
}
function lengthOfInsoleWithMadeOnBaseFalse640351(inputData) {
  const answer = getAnswer(inputData, "lengthOfInsole");
  if (!answer) {
    return createResult("640351", getQuestion("lengthOfInsole"));
  }
  if (answer === "yes") {
    return handleGenderTypeWithShaftAnkle640351(inputData);
  }
  if (answer === "no") {
    return createResult("6403519100");
  }
}
function MadeOnBase640351(inputData) {
  const answer = getAnswer(inputData, "madeOnBase");
  if (!answer) {
    return createResult("640351", getQuestion("madeOnBase"));
  }
  if (answer === "yes") {
    return handmade640351(inputData);
  } else if (answer === "no") {
    return lengthOfInsoleWithMadeOnBaseFalse640351(inputData);
  }
}
function handleGenderTypeWithShaftKnee640351(inputData) {
  const answer = getAnswer(inputData, "genderType");
  if (!answer) {
    return createResult("640351", getQuestion("genderType"));
  }
  if (answer === "women") {
    return createResult("6403511900");
  } else if (answer === "men") {
    return createResult("6403511500");
  }
}
function lengthOfInsoleWithShaftFalse640351(inputData) {
  const answer = getAnswer(inputData, "lengthOfInsole");
  if (!answer) {
    return createResult("640351", getQuestion("lengthOfInsole"));
  }
  if (answer === "yes") {
    return handleGenderTypeWithShaftKnee640351(inputData);
  } else if (answer === "no") {
    return createResult("6403511100");
  }
}
function shaft640351(inputData) {
  if (getAnswer(inputData, "shaft") === "ankle") {
    return MadeOnBase640351(inputData);
  } else if (getAnswer(inputData, "shaft") === "knee") {
    return lengthOfInsoleWithShaftFalse640351(inputData);
  }
}
function handmade640359(inputData) {
  const answer = getAnswer(inputData, "handmade");
  if (!answer) {
    return createResult("640359", getQuestion("handmade"));
  }
  if (answer === "yes") {
    return createResult("6403590510");
  } else if (answer === "no") {
    return createResult("6403590590");
  }
}
function handleGenderTypeWithLengthOfInsoleTrue64359(inputData) {
  const answer = getAnswer(inputData, "genderType");
  if (!answer) {
    return createResult("640359", getQuestion("genderType"));
  }
  if (answer === "women") {
    return createResult("6403593900");
  } else if (answer === "men") {
    return createResult("6403593500");
  }
}
function InsoleLengthWithHeightOfSoleFalse640359(inputData) {
  const answer = getAnswer(inputData, "lengthOfInsole");
  if (!answer) {
    return createResult("640359", getQuestion("lengthOfInsole"));
  }
  if (answer === "yes") {
    return handleGenderTypeWithLengthOfInsoleTrue64359(inputData);
  } else if (answer === "no") {
    return createResult("6403593100");
  }
}
function handleHeightOfSoleAndHeel640359(inputData) {
  const answer = getAnswer(inputData, "heightOfSoleAndHeel");
  if (!answer) {
    return createResult("640359", getQuestion("heightOfSoleAndHeel"));
  }
  if (answer === "yes") {
    return createResult("6403591100");
  } else if (answer === "no") {
    return InsoleLengthWithHeightOfSoleFalse640359(inputData);
  }
}
function genderTypeWithLengthOfInsoleTrue6400359(inputData) {
  const answer = getAnswer(inputData, "genderType");
  if (!answer) {
    return createResult("640359", getQuestion("genderType"));
  }
  if (answer === "women") {
    return createResult("6403599900");
  } else if (answer === "men") {
    return createResult("6403599500");
  }
}
function lengthOfInsoleWithSlippersFalse(inputData) {
  const answer = getAnswer(inputData, "lengthOfInsole");
  if (!answer) {
    return createResult("640359", getQuestion("lengthOfInsole"));
  }
  if (answer === "yes") {
    return genderTypeWithLengthOfInsoleTrue6400359(inputData);
  } else if (answer === "no") {
    return createResult("6403599100");
  }
}
function handleSlippers640359(inputData) {
  const answer = getAnswer(inputData, "slippers");
  if (!answer) {
    return createResult("640359", getQuestion("slippers"));
  }
  if (answer === "yes") {
    return createResult("6403595000");
  } else if (answer === "no") {
    return lengthOfInsoleWithSlippersFalse(inputData);
  }
}
function handleVamp640359(inputData) {
  const answer = getAnswer(inputData, "vamp");
  if (!answer) {
    return createResult("640359", getQuestion("vamp"));
  }
  if (answer === "yes") {
    return handleHeightOfSoleAndHeel640359(inputData);
  } else if (answer === "no") {
    return handleSlippers640359(inputData);
  }
}
function MadeOnBase640359(inputData) {
  const answer = getAnswer(inputData, "madeOnBase");
  if (!answer) {
    return createResult("640359", getQuestion("madeOnBase"));
  }
  if (answer === "yes") {
    return handmade640359(inputData);
  } else if (answer === "no") {
    return handleVamp640359(inputData);
  }
}
function handleShaftLeatherstrapsFalse6403(inputData) {
  const answer = getAnswer(inputData, "shaft");
  if (!answer) {
    return createResult("640351", getQuestion("shaft"));
  }
  if (answer === "ankle" || answer === "knee") {
    return shaft640351(inputData);
  } else if (answer === "other") {
    return MadeOnBase640359(inputData);
  }
}
function leatherStraps6403(inputData) {
  const answer = getAnswer(inputData, "leatherStraps");
  if (!answer) {
    return createResult("6403", getQuestion("leatherStraps"));
  }
  if (answer === "yes") {
    return createResult("6403200000");
  } else if (answer === "no") {
    return handleShaftLeatherstrapsFalse6403(inputData);
  }
}
function handmade640391(inputData) {
  const answer = getAnswer(inputData, "handmade");
  if (!answer) {
    return createResult("640391", getQuestion("handmade"));
  }
  if (answer === "yes") {
    return createResult("6403910510");
  } else if (answer == "no") {
    return createResult("6403910590");
  }
}
function genderType640391(inputData) {
  const answer = getAnswer(inputData, "genderType");
  if (!answer) {
    return createResult("640391", getQuestion("genderType"));
  }
  if (answer === "women") {
    return createResult("6403919800");
  } else if (answer === "men") {
    return createResult("6403919600");
  } else if (answer === "unisex") {
    return createResult("6403919300");
  }
}
function lengthOfInsoleWithShaftAnkle640391(inputData) {
  const answer = getAnswer(inputData, "lengthOfInsole");
  if (!answer) {
    return createResult("640391", getQuestion("lengthOfInsole"));
  }
  if (answer === "yes") {
    return genderType640391(inputData);
  }
  if (answer === "no") {
    return createResult("6403919100");
  }
}
function MadeOnBase640391(inputData) {
  const answer = getAnswer(inputData, "madeOnBase");
  if (!answer) {
    return createResult("640391", getQuestion("madeOnBase"));
  }
  if (answer === "yes") {
    return handmade640391(inputData);
  } else if (answer === "no") {
    return lengthOfInsoleWithShaftAnkle640391(inputData);
  }
}
function genderType640391WithShaftKnee(inputData) {
  const answer = getAnswer(inputData, "genderType");
  if (!answer) {
    return createResult("640391", getQuestion("genderType"));
  } else if (answer === "men") {
    if (getAnswer(inputData, "sports") === "yes") {
      return createResult("6403911610");
    } else if (getAnswer(inputData, "sports") === "no") {
      return createResult("6403911690");
    }
  } else if (answer === "women") {
    if (getAnswer(inputData, "sports") === "yes") {
      return createResult("6403911810");
    } else if (getAnswer(inputData, "sports") === "no") {
      return createResult("6403911890");
    }
  } else if (answer === "unisex") {
    if (getAnswer(inputData, "sports") === "yes") {
      return createResult("6403911310");
    } else if (getAnswer(inputData, "sports") === "no") {
      return createResult("6403911390");
    }
  }
}

function lengthOfInsoleWithShaftKnee640391(inputData) {
  const answer = getAnswer(inputData, "lengthOfInsole");

  if (!answer) {
    return createResult("640391", getQuestion("lengthOfInsole"));
  }
  if (answer === "yes") {
    return genderType640391WithShaftKnee(inputData);
  } else if (answer === "no") {
    const sportsAnswer = getAnswer(inputData, "sports");
    if (sportsAnswer === "yes") {
      return createResult("6403911110");
    } else if (sportsAnswer === "no") {
      return createResult("6403911190");
    }
  }
}

function shaft640391(inputData) {
  const answer = getAnswer(inputData, "shaft");
  if (answer === "ankle") {
    return MadeOnBase640391(inputData);
  } else if (answer === "knee") {
    const answer = getAnswer(inputData, "sports");
    if (!answer) {
      return createResult("640391", getQuestion("sports"));
    }
    if (answer) {
      return lengthOfInsoleWithShaftKnee640391(inputData);
    }
  }
}
function shaft6403(inputData) {
  const answer = getAnswer(inputData, "shaft");
  if (!answer) {
    return createResult("6403", getQuestion("shaft"));
  }
  if (answer === "ankle" || answer === "knee") {
    return shaft640391(inputData);
  } else if (answer === "other") {
    return createResult("640399", getQuestion("madeOnBase"));
  }
}
function handleToeCap6403(inputData) {
  const answer = getAnswer(inputData, "toeCap");
  if (!answer) {
    return createResult("6403", getQuestion("toeCap"));
  }
  if (answer === "yes") {
    return createResult("6403400000");
  } else if (answer === "no") {
    return shaft6403(inputData);
  }
}

export function calculator(inputData) {
  if (!inputData.questionAnswers) {
    return createResult("", getQuestion("footwearOrComponents"));
  }

  if (getAnswer(inputData, "footwearOrComponents") === "yes") {
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
        return handleWaterProof(inputData);
      }
    } else {
      if (
        upperTypeAnswer === "leather" &&
        soleAnswer !== "other" &&
        soleAnswer !== "wood"
      ) {
        if (soleAnswer === "leather") {
          return leatherStraps6403(inputData);
        }
        if (soleAnswer !== "leather") {
          return handleToeCap6403(inputData);
        }
      } else {
        if (
          upperTypeAnswer === "textile" &&
          soleAnswer !== "other" &&
          soleAnswer !== "wood"
        ) {
          if (soleAnswer === "leather" || soleAnswer === "immitationLeather") {
            return handleSlippers64040(inputData);
          } else if (soleAnswer === "plastic" || soleAnswer === "rubber") {
            return handleSport6404(inputData);
          }
        } else {
          if (
            upperTypeAnswer === "leather" &&
            (soleAnswer === "wood" || soleAnswer === "other")
          ) {
            return createResult("6405100000");
          } else {
            if (
              upperTypeAnswer === "textile" &&
              (soleAnswer === "wood" || soleAnswer === "other")
            ) {
              if (soleAnswer === "wood") {
                return createResult("6405201000");
              } else if (soleAnswer === "other") {
                return handleSlippers640520(inputData);
              }
            } else {
              if (soleAnswer !== "other") {
                return createResult("6405901000");
              } else if (soleAnswer === "other") {
                return createResult("6405909000");
              }
            }
          }
        }
      }
    }
  } else if (getAnswer(inputData, "footwearOrComponents") === "no") {
    return createResult("6406", getQuestion("part"));
  }
}
