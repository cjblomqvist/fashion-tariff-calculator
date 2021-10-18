import { getQuestion, getNewQuestion } from './helpers'
import { footwearNew } from '../questions/footwear-merged.js'

export function mapNewToOld(newQuestionAnswers) {
  const oldQuestionAnswers = []

  newQuestionAnswers.forEach((questionAnswer) => {
    let questionAnswerQuestionKey
    const newQuestion = getNewQuestion(questionAnswer.questionKey)

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

    const keyWeNeed = getQuestion(questionAnswerQuestionKey).key

    oldQuestionAnswers.push({
      answerKey: questionAnswer.answerKey,
      questionKey: keyWeNeed
    })
  })
  return oldQuestionAnswers
}

export function mapOldToNew(oldQuestionAnswers) {
  return oldQuestionAnswers.map((oldQuestionAnswer) => {
    const newAnswerKey = oldQuestionAnswer.answerKey

    const flattenedFootwearNew = footwearNew
      .map((newQuestion) => {
        if (newQuestion.type === 'multi') return newQuestion.subQuestions

        return newQuestion
      })
      .flat()

    const newQuestionKey = flattenedFootwearNew.find(
      (newQuestion) =>
        newQuestion.key === oldQuestionAnswer.questionKey ||
        newQuestion.originalQuestionKey === oldQuestionAnswer.questionKey
    ).key

    return {
      questionKey: newQuestionKey,
      answerKey: newAnswerKey
    }
  })
}
