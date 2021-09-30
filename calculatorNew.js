import hsFootwear from './lib/hs-footwear'
import taricFootwear from './lib/taric-footwear'
import { mapNewToOld } from './mapping/mapNewToOldQuestion'
import { getNewQuestion } from './questions/getNewQuestion'

export function calculatorNew(inputData) {
  const oldQuestionAnswers = mapNewToOld(inputData.questionAnswers)

  inputData.questionAnswers = oldQuestionAnswers

  const outputData = hsFootwear(inputData, taricFootwear)
  if (outputData.partial === false) {
    return outputData
  } else {
    const oldQuestion = outputData.question
    const newQuestion = getNewQuestion(oldQuestion.key)

    outputData.question = newQuestion

    return outputData
  }
}
