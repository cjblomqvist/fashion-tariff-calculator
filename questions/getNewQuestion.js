import { footwearNew } from "./footwearNew.js";

export function getNewQuestion(key) {
  const question = footwearNew.find((question) => question.key === key);
  
  if (question) {
    return question;
  }
  throw "Question " + key + " does not exist";
}