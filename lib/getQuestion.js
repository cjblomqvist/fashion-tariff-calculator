import { footwear } from '../questions/footwear.js'

export function getQuestion(key) {
  const question = footwear.find((question) => question.key === key)

  if (question) {
    return question
  }
  throw 'Question ' + key + ' does not exist'
}
