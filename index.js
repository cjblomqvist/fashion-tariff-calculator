import { footwear } from "./questions/footwear.js";
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

//

function handleShaft(inputData) {
  let answer = getAnswer(inputData, "shaft");
  let code = "6401";
  if (!answer) {
    return {
      question: getQuestion("shaft"),
      code: code,
      partial: true,
    };
  }
  if (answer === "ankle") {
    code = code.concat("921000");
  }
  if (answer === "knee") {
    code = code.concat("990010");
  }
  if (answer === "other") {
    code = code.concat("990090");
  }
  return {
    code: code,
    partial: false,
  };
}
function handleSkiBoots(inputData) {
  let answer = getAnswer(inputData, "skiBoots");
  let code = "6402";

  if (!answer) {
    return {
      question: getQuestion("skiBoots"),
      code: code,
      partial: true,
    };
  }

  if (answer === "skiBoots") {
    code = code.concat("121000");
  }
  if (answer === "snowboardBoots") {
    code = code.concat("129000");
  }
  if (answer === "other") {
    code = code.concat("190000");
  }

  return {
    code: code,
    partial: false,
  };
}
function handleToeCap(inputData) {
  let answer = getAnswer(inputData, "toeCap");
  let code = "6401";
  if (!answer) {
    return {
      question: getQuestion("toeCap"),
      code: code,
      partial: true,
    };
  }
  if (answer === "yes") {
    return {
      code: code.concat("100000"),
      partial: false,
    };
  }
  if (getAnswer(inputData, "toeCap") === "no") {
    return handleShaft(inputData);
  }
}
function handleToeCapAfterShaft(inputData) {
  let answer = getAnswer(inputData, "toeCap");
  let code = "640291";
  if (!answer) {
    return {
      question: getQuestion("toeCap"),
      code: code,
      partial: true,
    };
  }
  if (answer === "yes") {
    code = code.concat("1000");
  }
  if (answer === "no") {
    code = code.concat("9000");
  }
  return {
    code: code,
    partial: false,
  };
}
function handleHeightOfSoleAndHeelMoreThan3(inputData) {
  let code = "640299";
  const answer = getAnswer(inputData, "heightOfSoleAndHeel");
  if (!answer) {
    return {
      question: getQuestion("heightOfSoleAndHeel"),
      code: code,
      partial: true,
    };
  }
  if (answer === "yes") {
    code = code.concat("3100");
  }
  if (answer === "no") {
    code = code.concat("3900");
  }
  return {
    code: code,
    partial: false,
  };
}
function handleGenderType(inputData) {
  let code = "640299";
  const answer = getAnswer(inputData, "genderType");
  if (!answer) {
    return {
      question: getQuestion("genderType"),
      code: code,
      partial: true,
    };
  }
  if (answer === "women") {
    code = code.concat("9800");
  }
  if (answer === "men") {
    code = code.concat("9600");
  }
  if (answer === "unisex") {
    code = code.concat("9300");
  }
  return {
    code: code,
    partial: false,
  };
}
function handleInsoleLengthMoreThan24(inputData) {
  let code = "640299";
  const answer = getAnswer(inputData, "lengthOfInsole");
  if (!answer) {
    return {
      question: getQuestion("lengthOfInsole"),
      code: code,
      partial: true,
    };
  }
  if (answer === "yes") {
    return handleGenderType(inputData);
  }
  if (answer === "no") {
    return {
      code: code.concat("9100"),
      partial: false,
    };
  }
}
function handleVamp(inputData) {
  let code = "640299";
  let answer = getAnswer(inputData, "vamp");
  if (!answer) {
    return {
      question: getQuestion("vamp"),
      code: code,
      partial: true,
    };
  }
  if (answer === "yes") {
    return handleHeightOfSoleAndHeelMoreThan3(inputData);
  }
  if (answer === "no") {
    return handleInsoleLengthMoreThan24(inputData);
  }
}
function handleSlippers(inputData) {
  let code = "640299";
  let answer = getAnswer(inputData, "slippers");
  if (!answer) {
    return {
      question: getQuestion("slippers"),
      code: code,
      partial: true,
    };
  }
  if (answer === "yes") {
    return {
      code: code.concat(5000),
      partial: false,
    };
  }
  if (answer === "no") {
    return handleVamp(inputData);
  }
}
function handleRubberOrPlastic(inputData) {
  let code = "640299";
  let upperAnswer = getAnswer(inputData, "upperType");
  if (upperAnswer === "rubber") {
    return {
      code: code.concat("1000"),
      partial: false,
    };
  }
  if (upperAnswer === "plastic") {
    return handleSlippers(inputData);
  }
}
function handleToeCapAfterUpperStraps(inputData) {
  let code = "640299";
  let answer = getAnswer(inputData, "toeCap");

  if (!answer) {
    return {
      question: getQuestion("toeCap"),
      code: code,
      partial: true,
    };
  }
  if (answer === "yes") {
    return {
      code: code.concat("0500"),
      partial: false,
    };
  }
  if (answer === "no") {
    return handleRubberOrPlastic(inputData);
  }
}

function handleShaftAfterStrapsNo(inputData) {
  let answer = getAnswer(inputData, "shaft");
  let code = "6402";
  if (!answer) {
    return {
      question: getQuestion("shaft"),
      code: code,
      partial: true,
    };
  }
  if (answer === "ankle") {
    return handleToeCapAfterShaft(inputData);
  }
  if (answer !== "ankle") {
    return handleToeCapAfterUpperStraps(inputData);
  }
}
function handleUpperStrapsOrThongs(inputData) {
  let answer = getAnswer(inputData, "upperStrapsOrThongs");
  let code = "6402";
  if (!answer) {
    return {
      question: getQuestion("upperStrapsOrThongs"),
      code: code,
      partial: true,
    };
  }
  if (answer === "upperStraps") {
    return {
      code: code.concat("200000"),
      partial: false,
    };
  }
  if (answer === "thongs") {
    return handleShaftAfterStrapsNo(inputData);
  }
}
function handleWinterSports(inputData) {
  let answer = getAnswer(inputData, "winterSports");
  let code = "6402";

  if (!answer) {
    return {
      question: getQuestion("winterSports"),
      code: code,
      partial: true,
    };
  }
  if (answer === "yes") {
    return handleSkiBoots(inputData);
  }
  if (answer === "no") {
    return handleUpperStrapsOrThongs(inputData);
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
    return handleToeCap(inputData);
  } else if (
    answer === "no" &&
    (getAnswer(inputData, "process") === "moccasins" ||
      getAnswer(inputData, "process") === "hand stiched" ||
      getAnswer(inputData, "process") === "direct injection process")
  ) {
    return handleWinterSports(inputData);
  }
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
      if (getAnswer(inputData, "process")) {
        return handleWaterProof(inputData);
      }

      return createResult("", getQuestion("process"));
    } else if (
      getAnswer(inputData, "upperType") === "leather" &&
      getAnswer(inputData, "sole") !== "other" &&
      getAnswer(inputData, "sole") !== "wood"
    ) {
      if (getAnswer(inputData, "sole") === "leather") {
        return createResult("6403", getQuestion("leatherStraps"));
      }
      return createResult("6403", getQuestion("toeCap"));
    } else if (
      getAnswer(inputData, "upperType") === "textile" &&
      getAnswer(inputData, "sole") !== "other" &&
      getAnswer(inputData, "sole") !== "wood"
    ) {
      if (
        getAnswer(inputData, "sole") === "leather" ||
        getAnswer(inputData, "sole") === "textile"
      ) {
        if (getAnswer(inputData, "slippers") === "yes") {
          return createResult("6404201000");
        }
        if (getAnswer(inputData, "slippers") === "no") {
          return createResult("6404209000");
        }
        return createResult("640420", getQuestion("slippers"));
      }
      if (
        getAnswer(inputData, "sole") === "plastic" ||
        getAnswer(inputData, "sole") === "rubber"
      ) {
        if (getAnswer(inputData, "sports") === "yes") {
          return createResult("6404110000");
        }
        if (getAnswer(inputData, "sports") === "no") {
          if (getAnswer(inputData, "slippers") === "yes") {
            return createResult("6404191000");
          }
          if (getAnswer(inputData, "slippers") === "no") {
            return createResult("6404199000");
          }
          return createResult("640419", getQuestion("slippers"));
        }
        return createResult("6404", getQuestion("sports"));
      }
    }
  } else {
    return createResult("6406", getQuestion("part"));
  }
}
