import hsFootwear from './lib/hs-footwear'
import taricFootwear from './lib/taric-footwear'
import { mapNewToOld } from './mapping/mapNewToOldQuestion'
import { getNewQuestion } from './questions/getNewQuestion'

export function calculatorNew(inputData) {
  const oldQuestionAnswers = mapNewToOld(inputData.questionAnswers)

  inputData.questionAnswers = oldQuestionAnswers

  const checky = hsFootwear(inputData, taricFootwear)
  if (checky.partial === false) {
    return checky
  } else {
    const oldQuestion = checky.question
    const newQuestion = getNewQuestion(oldQuestion.key)

    checky.question = newQuestion

    return checky
  }
}
