import { footwearNew } from './footwearNew.js'

export function getNewQuestion(key) {
  const newQuestion = footwearNew.find((question) => {
    if (question.originalQuestionKey === key || question.key === key)
      return true

    if (question.type === 'multi') {
      if (
        question.subQuestions
          .map((subQuestion) => subQuestion.key)
          .includes(key)
      ) {
        return true
      }
    }

    return false
  })

  if (newQuestion) {
    return newQuestion
  }
  throw 'Question ' + key + ' does not exist'
}
