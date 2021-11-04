import hsFootwearComponents from './hs-footwear-components'
import { components } from '../questions/components.js'
import { createResult, getQuestion } from '../lib/helpers.js'

function cleanMultiTest(questionAnswers, result) {
  let table = []
  Object.entries(questionAnswers).forEach(([questionKey, val]) => {
    function getAnswerKeyList(questionKey, val) {
      if (val === '*')
        return getQuestion(questionKey, components).answers.map(
          (answer) => answer.key
        )

      if (Array.isArray(val)) return val

      return [val]
    }

    const answerKeyList = getAnswerKeyList(questionKey, val)

    if (!table.length) {
      table = answerKeyList.map((answerKey) => {
        return { [questionKey]: answerKey }
      })
    } else {
      table = answerKeyList
        .map((answerKey) => {
          return table.map((questionAnswerCollection) => {
            return {
              ...questionAnswerCollection,
              [questionKey]: answerKey
            }
          })
        })
        .flat()
    }
  })
  if (!table.length) {
    table = [{}]
  }
  test.each(table)('', (questionAnswerCollection) => {
    const questionAnswers = Object.entries(questionAnswerCollection).map(
      ([questionKey, answerKey]) => {
        return { questionKey, answerKey }
      }
    )
    const inputData = {
      questionAnswers: [...questionAnswers]
    }
    const actualResult = hsFootwearComponents(
      inputData,
      (inputData, code) => code
    )
    const expectedResult = result.questionKey
      ? createResult(result.code, getQuestion(result.questionKey, components))
      : result
    expect(expectedResult).toStrictEqual(actualResult)
  })
}

describe('6406', () => {
  describe.each([
    [{}, { code: '', questionKey: 'part' }],
    [{ part: 'upper' }, '640610'],
    [{ part: 'heel' }, '640620'],
    [{ part: ['withoutOuterSole', 'removable', 'outer', 'gaiters'] }, '640690']
  ])('', cleanMultiTest)
})
