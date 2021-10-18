import hsFootwear from './tariff-logic/hs-footwear'
import taricFootwear from './tariff-logic/taric-footwear'
import htsFootwear from './tariff-logic/hts-footwear'
import { mapNewToOld } from './lib/mapNewToOldQuestion'
import { getNewQuestion } from './lib/getNewQuestion'

export function calculator(inputData) {
  const isFootwear = true
  let system = 'TARIC'

  if (isFootwear) {
    if (system === 'TARIC') {
      return hsFootwear(inputData, taricFootwear)
    }

    if (system === 'HTS') {
      return hsFootwear(inputData, htsFootwear)
    }
  }
}

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
