import { footwearNew } from './footwearNew.js'

export function getNewQuestion(key) {
  const flatQuestion = footwearNew
    .map((fQuestion) => {
      if (fQuestion.type === 'multi') return fQuestion.subQuestions
      return fQuestion
    })
    .flat()

  const question = flatQuestion.find((fQuestion) => fQuestion.key === key)

  if (question) {
    return question
  }
  throw 'Question ' + key + ' does not exist'
}
