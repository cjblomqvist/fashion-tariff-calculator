import { footwearNew } from '../questions/footwearNew.js'

export function mapOldToNew(oldQuestionAnswers) {
  return oldQuestionAnswers.map((oldQuestionAnswer) => {
    const newQuestionAnswerKey = oldQuestionAnswer.answerKey

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
      answerKey: newQuestionAnswerKey
    }
  })
}
