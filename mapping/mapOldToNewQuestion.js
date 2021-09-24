import { footwearNew } from '../questions/footwearNew.js'

export function mapOldToNew(oldQuestionAnswers) {
  return oldQuestionAnswers.map((oldQuestionAnswer) => {
    const newQuestionKey = footwearNew.find(
      (newQuestion) =>
        newQuestion.key === oldQuestionAnswer.questionKey ||
        newQuestion.originalQuestionKey === oldQuestionAnswer.questionKey
    ).key

    const newQuestionAnswerKey = oldQuestionAnswer.answerKey

    return {
      questionKey: newQuestionKey,
      answerKey: newQuestionAnswerKey
    }
  })
}
