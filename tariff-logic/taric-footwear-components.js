import { components } from '../questions/components.js'
import { createResult, getAnswerKey, getQuestion } from '../lib/helpers.js'

export default function taricFootwearComponents(inputData, code) {
  if (code === '640610') {
    const materialTypeAnswer = getAnswerKey(inputData, 'materialType')
    if (!materialTypeAnswer) {
      return createResult('640610', getQuestion('materialType', components))
    }
    if (materialTypeAnswer === 'leather') {
      return handmade640610(inputData)
    }
    if (materialTypeAnswer !== 'leather') {
      return handmadeNotLeather640610(inputData)
    }
  }
  if (code === '640620') {
    const materialTypeAnswer = getAnswerKey(inputData, 'materialType')
    if (!materialTypeAnswer) {
      return createResult('640620', getQuestion('materialType', components))
    }
    if (materialTypeAnswer === 'rubber') {
      return handmade640620(inputData)
    }
    return handmadeNotRubber640620(inputData)
  }
  if (code === '640690') {
    const handmadeAnswer = getAnswerKey(inputData, 'handmade')
    const partAnswer = getAnswerKey(inputData, 'part')
    if (!handmadeAnswer) {
      return createResult('640690', getQuestion('handmade', components))
    }
    if (partAnswer === 'withoutOuterSole') {
      return withoutOuterSole640690(inputData)
    }
    if (partAnswer === 'removable') {
      return removable640690(inputData)
    }
    if (partAnswer === 'outer' || partAnswer === 'gaiters') {
      return outerOrGaiters640690(inputData)
    }
  }
}

function handmade640610(inputData) {
  const answer = getAnswerKey(inputData, 'handmade')
  if (!answer) {
    return createResult('640610', getQuestion('handmade', components))
  }
  if (answer === 'yes') {
    return createResult('6406101010')
  }
  return createResult('6406101090')
}
function handmadeNotLeather640610(inputData) {
  const handmadeAnswer = getAnswerKey(inputData, 'handmade')
  const materialTypeAnswer = getAnswerKey(inputData, 'materialType')
  if (!handmadeAnswer) {
    return createResult('640610', getQuestion('handmade', components))
  }
  if (handmadeAnswer === 'yes' && materialTypeAnswer === 'other') {
    return createResult('6406109010')
  }
  return createResult('6406109090')
}
function handmade640620(inputData) {
  const handmadeAnswer = getAnswerKey(inputData, 'handmade')
  if (!handmadeAnswer) {
    return createResult('640620', getQuestion('handmade', components))
  }
  if (handmadeAnswer === 'yes') {
    return createResult('6406201010')
  }
  return createResult('6406201090')
}
function handmadeNotRubber640620(inputData) {
  const handmadeAnswer = getAnswerKey(inputData, 'handmade')
  const materialTypeAnswer = getAnswerKey(inputData, 'materialType')
  if (!handmadeAnswer) {
    return createResult('640620', getQuestion('handmade', components))
  }
  if (handmadeAnswer === 'yes' && materialTypeAnswer === 'plastic') {
    return createResult('6406209010')
  }
  return createResult('6406209090')
}

function withoutOuterSole640690(inputData) {
  const handmadeAnswer = getAnswerKey(inputData, 'handmade')
  if (!handmadeAnswer) {
    return createResult('640690', getQuestion('handmade', components))
  }
  if (handmadeAnswer === 'yes') {
    return createResult('6406903010')
  }
  return createResult('6406903090')
}
function removable640690(inputData) {
  const handmadeAnswer = getAnswerKey(inputData, 'handmade')
  if (!handmadeAnswer) {
    return createResult('640690', getQuestion('handmade', components))
  }
  if (handmadeAnswer === 'yes') {
    return createResult('6406905010')
  }
  return createResult('6406905090')
}
function outerOrGaiters640690(inputData) {
  const materialTypeAnswer = getAnswerKey(inputData, 'materialType')
  const partAnswer = getAnswerKey(inputData, 'part')
  if (!materialTypeAnswer) {
    return createResult('640690', getQuestion('materialType', components))
  }
  if (
    materialTypeAnswer === 'leatherOrCompositionLeather' &&
    partAnswer === 'outer'
  ) {
    return outerLeatherOrCompositionLeather640690(inputData)
  }
  return outerOrGaitersNotLeatherOrCompositionLeather640690(inputData)
}

function outerLeatherOrCompositionLeather640690(inputData) {
  const handmadeAnswer = getAnswerKey(inputData, 'handmade')
  const partAnswer = getAnswerKey(inputData, 'part')
  if (!handmadeAnswer) {
    return createResult('640690', getQuestion('handmade', components))
  }
  if (handmadeAnswer === 'yes') {
    return createResult('6406906010')
  }
  return createResult('6406906090')
}
function outerOrGaitersNotLeatherOrCompositionLeather640690(inputData) {
  const handmadeAnswer = getAnswerKey(inputData, 'handmade')
  const partAnswer = getAnswerKey(inputData, 'part')
  if (!handmadeAnswer) {
    return createResult('640690', getQuestion('handmade', components))
  }
  if (handmadeAnswer === 'yes' && partAnswer === 'gaiters') {
    return createResult('6406909020')
  }
  return createResult('6406909090')
}
