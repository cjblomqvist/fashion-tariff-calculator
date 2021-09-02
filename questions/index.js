import { footwear } from "./footwear.js";

export function getQuestion(answer) {
  if (typeof answer === "string" || answer instanceof String) {
    return getQuestionOld(answer);
  }
  return getQuestionOld(answer.key);
}

export function getQuestionOld(key) {
  const question = footwear.find((question) => question.key === key);

  if (question) {
    return question;
  }

  throw "Question " + key + " does not exist";
}
