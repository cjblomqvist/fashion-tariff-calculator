import { getNewQuestion } from '../lib/getNewQuestion'
import { getQuestion } from '../lib/getQuestion'

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
