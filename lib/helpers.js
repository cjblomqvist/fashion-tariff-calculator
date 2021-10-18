import { footwear } from '../questions/footwear.js'
import { footwearNew } from '../questions/footwear-merged.js'

export function createResult(code, question) {
  if (question) {
    return {
      question,
      code,
      partial: true
    }
  }
  return {
    code,
    partial: false
  }
}

export function getAnswerKey(inputData, questionKey) {
  if (inputData.questionAnswers) {
    for (const a of inputData.questionAnswers) {
      if (a.questionKey === questionKey) {
        return a.answerKey
      }
    }
  }
  return null
}

export function getQuestion(key) {
  const question = footwear.find((question) => question.key === key)

  if (question) {
    return question
  }
  throw 'Question ' + key + ' does not exist'
}

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
