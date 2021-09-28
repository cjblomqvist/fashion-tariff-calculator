import { getNewQuestion } from '../questions/getNewQuestion'
import { getQuestion } from '../questions/getQuestion'

export function mapNewToOld(newQuestionAnswers) {
  const oldQuestionAnswers = []

  newQuestionAnswers.forEach((questionAnswer) => {
    const questionAnswerQuestionKey =
      getNewQuestion(questionAnswer.questionKey).originalQuestionKey ||
      getNewQuestion(questionAnswer.questionKey).key

    const keyWeNeed = getQuestion(questionAnswerQuestionKey).key

    oldQuestionAnswers.push({
      answerKey: questionAnswer.answerKey,
      questionKey: keyWeNeed
    })
  })
  return oldQuestionAnswers
}
