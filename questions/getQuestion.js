import { footwear } from './footwear.js'

export function getQuestion(key) {
  const question = footwear.find((question) => question.key === key)

  if (question) {
    return question
  }
  console.trace()
  throw 'Question ' + key + ' does not exist'
}
