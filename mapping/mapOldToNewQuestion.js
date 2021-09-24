import { getNewQuestion } from '../questions/getNewQuestion'
import { getQuestion } from '../questions/getQuestion'

export function mapOldToNew(oldQuestionAnswers) {
  const newQuestionAnswers = []

  oldQuestionAnswers.forEach((questionAnswer) => {
    // const newQuestionKey = oldQuestion.key

    // const newQuestion = getNewQuestion(newQuestionKey)

    //1. Få fram oldQuestion
    const oldQuestion = getQuestion(questionAnswer.questionKey)
    //2. Få fram newQuestionKey
    const newQuestionKey = oldQuestion.key //Eller inte
    //3. Få fram newQuestion

    const newAnswer = questionAnswer.answerKey
    const newQuestion = questionAnswer.questionKey
    newQuestionAnswers.push({
      answerKey: newAnswer,
      questionKey: newQuestion
    })
  })
  return newQuestionAnswers
}
