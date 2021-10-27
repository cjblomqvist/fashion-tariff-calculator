import { base } from '../questions/base.js'
import { createResult, getAnswerKey, getQuestion } from '../lib/helpers.js'

export default function hsBase(inputData) {
  // 1. Create question that is asking for country and is returning question footwearOrComponents
  if (getAnswerKey(inputData, 'country') === 'eu') {
    const footwearOrComponentsAnswer = getAnswerKey(
      inputData,
      'footwearOrComponents'
    )
    // 2. Create question that is asking for footwear or components and returning hs-footwear or hs-components depending on the choise.
    // Currently setting system in calculatorOriginal to TARIC kind of
    if (!footwearOrComponentsAnswer) {
      return createResult('', getQuestion('footwearOrComponents', base))
    }
    if (footwearOrComponentsAnswer === 'footwear') {
      // return systemSpecificCallback hs-footwear
      return 'footwearYesYes'
    }
    if (footwearOrComponentsAnswer === 'components') {
      // return systemSpecificCallback hs-components
      return 'componentsYesYes'
    }
  }
  return createResult('', getQuestion('country', base))
}
