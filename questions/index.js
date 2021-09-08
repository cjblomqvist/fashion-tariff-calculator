import { footwear } from "./footwear.js";

export function getQuestion(key) {
  const question = footwear.find((question) => question.key === key);

  if (question) {
    return question;
  }

  throw "Question " + key + " does not exist";
}

export function getAnswer(inputData, key) {
  if (inputData.questionAnswers) {
    for (const a of inputData.questionAnswers) {
      if (a.questionKey === key) {
        return a.answerKey;
      }
    }
  }
  return null;
}

export function createResult(code, question) {
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
