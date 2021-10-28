import { components } from '../questions/components.js'
import { createResult, getAnswerKey, getQuestion } from '../lib/helpers.js'
export default function hsFootwearComponents(
  inputData,
  systemSpecificCallback
) {
  const partAnswer = getAnswerKey(inputData, 'part')
  if (!partAnswer) {
    return createResult('', getQuestion('part', components))
  }
  if (partAnswer === 'upper') {
    return systemSpecificCallback(inputData, '640610')
  }
  if (partAnswer === 'heel') {
    return systemSpecificCallback(inputData, '640620')
  }
  return systemSpecificCallback(inputData, '640690')
}
