import hsFootwear from '../tariff-logic/hs-footwear'
import taricFootwear from '../tariff-logic/taric-footwear'
import htsFootwear from '../tariff-logic/hts-footwear'
import { getQuestion, mapMergedQuestionAnswersToOriginal } from './helpers'
import cloneDeep from 'lodash/cloneDeep'
import hsBase from '../tariff-logic/hs-base'
import taricFootwearComponents from '../tariff-logic/taric-footwear-components'
import hsFootwearComponents from '../tariff-logic/hs-footwear-components'

export function calculatorFactory(options) {
  const mergedQuestions = options.questions === 'merged'

  return function calculator(inputData) {
    inputData = cloneDeep(inputData) // Ensure we don't modify the passed in data

    if (mergedQuestions)
      inputData.questionAnswers = mapMergedQuestionAnswersToOriginal(
        inputData.questionAnswers
      )

    const result = calculatorOriginal(inputData)

    if (mergedQuestions && result.question)
      result.question = getQuestion(result.question.key)

    return result
  }
}

export const calculator = calculatorFactory({ questions: 'merged' })

function calculatorOriginal(inputData) {
  const isFootwear = true
  let system = 'TARIC'
  // isFootwear variabeln behöver inte vara mä men kan vara en check om base questions har blivit besvarade
  // onödigt för hsBase besvarar/skickar tillbaka något ändå?
  // System ska vara outputen av hsBase(inputData)
  console.log('inputData: ', inputData)
  let system2 = hsBase({
    questionAnswers: [
      { questionKey: 'country', answerKey: 'eu' },
      { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
    ]
  })
  console.log('system2: ', system2)
  if (isFootwear) {
    if (system2 === 'footwearYesYes') {
      return hsFootwear(inputData, taricFootwear)
    }
    if (system2 === 'componentsYesYes') {
      return hsFootwearComponents(inputData, taricFootwearComponents)
    }
    if (system2 === 'HTS') {
      return hsFootwear(inputData, htsFootwear)
    }
    return hsBase(inputData)
  }
}
