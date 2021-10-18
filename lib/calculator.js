import hsFootwear from '../tariff-logic/hs-footwear'
import taricFootwear from '../tariff-logic/taric-footwear'
import htsFootwear from '../tariff-logic/hts-footwear'
import { mapNewToOld } from './mapping'
import { getNewQuestion } from './helpers'
import cloneDeep from 'lodash/cloneDeep'

export function calculatorFactory(options) {
  const mergedQuestions = options.questions === 'merged';

  return function calculator(inputData) {
    inputData = cloneDeep(inputData); // Ensure we don't modify the passed in data

    if(mergedQuestions) inputData.questionAnswers = mapNewToOld(inputData.questionAnswers);

    const result = calculatorOriginal(inputData);

    if(mergedQuestions && result.question) result.question = getNewQuestion(result.question.key);

    return result;
  }
}

export const calculator = calculatorFactory({ questions: 'merged' });

function calculatorOriginal(inputData) {
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
