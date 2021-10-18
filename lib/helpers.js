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

export function getQuestion(key, questions = footwearNew) {
  const newQuestion = questions.find((question) => {
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

export function mapMergedQuestionAnswersToOriginal(mergedQuestionAnswers) {
  const originalQuestionAnswers = []

  mergedQuestionAnswers.forEach((questionAnswer) => {
    let questionAnswerQuestionKey
    const newQuestion = getQuestion(questionAnswer.questionKey)

    if (newQuestion.type === 'multi') {
      const subQuestion = newQuestion.subQuestions.find(
        (subQuestion) => subQuestion.key === questionAnswer.questionKey
      )

      questionAnswerQuestionKey =
        subQuestion.originalQuestionKey || subQuestion.key
    } else {
      questionAnswerQuestionKey =
        newQuestion.originalQuestionKey || newQuestion.key
    }

    const keyWeNeed = getQuestion(questionAnswerQuestionKey, footwear).key

    originalQuestionAnswers.push({
      answerKey: questionAnswer.answerKey,
      questionKey: keyWeNeed
    })
  })
  return originalQuestionAnswers
}
