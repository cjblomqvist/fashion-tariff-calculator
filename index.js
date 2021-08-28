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

export function calculator(inputData) {
  if (!inputData.questionAnswers) {
    return {
      question: getQuestion("footwearOrComponents"),
      code: "",
      partial: true,
    };
  }

  if (getAnswer(inputData, "footwearOrComponents") === "yes") {
    if (getAnswer(inputData, "upperType")) {
      if (
        (getAnswer(inputData, "upperType") === "rubber" ||
          getAnswer(inputData, "upperType") === "plastic") &&
        (getAnswer(inputData, "sole") === "plastic" ||
          getAnswer(inputData, "sole") === "rubber")
      ) {
        if (getAnswer(inputData, "process")) {
          if (
            getAnswer(inputData, "waterProof") &&
            (getAnswer(inputData, "process") === "moccasins" ||
              getAnswer(inputData, "process") === "hand stiched" ||
              getAnswer(inputData, "process") === "direct injection process")
          ) {
            if (getAnswer(inputData, "toeCap") === "yes") {
              return {
                code: 64011,
                partial: false,
              };
            }
            if (getAnswer(inputData, "toeCap") === "no") {
              if (getAnswer(inputData, "shaft") === "ankle") {
                return {
                  code: 6401921000,
                  partial: false,
                };
              }
              if (getAnswer(inputData, "shaft") === "knee") {
                return {
                  code: 6401990010,
                  partial: false,
                };
              }
              if (getAnswer(inputData, "shaft") === "other") {
                return {
                  code: 6401990090,
                  partial: false,
                };
              }
              return {
                question: getQuestion("shaft"),
                code: 6401,
                partial: true,
              };
            }
            return {
              question: getQuestion("toeCap"),
              code: 6401,
              partial: true,
            };
          }

          return {
            question: getQuestion("waterProof"),
            code: "",
            partial: true,
          };
        }

        return {
          question: getQuestion("process"),
          code: "",
          partial: true,
        };
      }

      return {
        question: getQuestion("sole"),
        code: "",
        partial: true,
      };
    }
    return {
      question: getQuestion("upperType"),
      code: "",
      partial: true,
    };
  } else {
    return {
      question: getQuestion("part"),
      code: 6406,
      partial: true,
    };
  }
}
