import { footwear } from "./footwear.js";

export function getQuestion(key) {
  return footwear.find((question) => question.key === key);
}
