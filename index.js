import { getQuestion } from "./questions/index.js";

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

    if (
      (getAnswer(inputData, "upperType") === "rubber" ||
        getAnswer(inputData, "upperType") === "plastic") &&
      (getAnswer(inputData, "sole") === "plastic" ||
        getAnswer(inputData, "sole") === "rubber")
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
        getAnswer(inputData, "upperType") === "leather" &&
        getAnswer(inputData, "sole") !== "other" &&
        getAnswer(inputData, "sole") !== "wood"
      ) {
        if (getAnswer(inputData, "sole") === "leather") {
          return createResult("6403", getQuestion("leatherStraps"));
        }
        if (getAnswer(inputData, "sole") !== "leather") {
          return createResult("6403", getQuestion("toeCap"));
        }
      } else {
        if (
          getAnswer(inputData, "upperType") === "textile" &&
          getAnswer(inputData, "sole") !== "other" &&
          getAnswer(inputData, "sole") !== "wood"
        ) {
          if (
            getAnswer(inputData, "sole") === "leather" ||
            getAnswer(inputData, "sole") === "immitationLeather"
          ) {
            return handleSlippers64040(inputData);
          } else if (
            getAnswer(inputData, "sole") === "plastic" ||
            getAnswer(inputData, "sole") === "rubber"
          ) {
            return handleSport6404(inputData);
          }
        } else {
          if (
            getAnswer(inputData, "upperType") === "leather" &&
            (getAnswer(inputData, "sole") === "wood" ||
              getAnswer(inputData, "sole") === "other")
          ) {
            return createResult("6405100000");
          } else {
            if (
              getAnswer(inputData, "upperType") === "textile" &&
              (getAnswer(inputData, "sole") === "wood" ||
                getAnswer(inputData, "sole") === "other")
            ) {
              if (getAnswer(inputData, "sole") === "wood") {
                return createResult("6405201000");
              } else if (getAnswer(inputData, "sole") === "other") {
                return handleSlippers640520(inputData);
              }
            } else {
              if (getAnswer(inputData, "sole") !== "other") {
                return createResult("6405901000");
              } else if (getAnswer(inputData, "sole") === "other") {
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
