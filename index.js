import { getQuestion } from "./questions/index.js";

//
function getAnswer(inputData, n) {
  return inputData.answers[n] ? inputData.answers[n].answer : -1;
}
//

export function calculator(inputData) {
  if (!inputData.answers) {
    return {
      question: getQuestion("footwearOrComponents"),
      code: "",
      partial: true,
    };
  }
  if (getAnswer(inputData, 0) === 0) {
    if (inputData.answers[1]) {
      if (
        (inputData.answers[1].answer === 3 ||
          inputData.answers[1].answer === 4) &&
        (inputData.answers[2].answer === 3 || inputData.answers[2].answer === 4)
      ) {
        if (inputData.answers[3]) {
          if (
            inputData.answers[4] &&
            (inputData.answers[4].answer === 1 ||
              inputData.answers[4].answer === 11 ||
              inputData.answers[4].answer === 12)
          ) {
            if (getAnswer(inputData, 5) === 0) {
              return {
                code: 64011,
                partial: false,
              };
            }
            if (getAnswer(inputData, 5) === 1) {
              if (getAnswer(inputData, 6) === 1) {
                return {
                  code: 6401921000,
                  partial: false,
                };
              }
              if (getAnswer(inputData, 6) === 2) {
                return {
                  code: 6401990010,
                  partial: false,
                };
              }
              if (getAnswer(inputData, 6) === 3) {
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
