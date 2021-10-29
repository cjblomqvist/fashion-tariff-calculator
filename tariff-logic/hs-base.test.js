import hsBase from './hs-base.js'
import base from '../questions/base'
import { createResult, getQuestion } from '../lib/helpers.js'

test.each([
  [[], 'country'],
  [[{ questionKey: 'country', answerKey: 'eu' }], 'footwearOrComponents'],
  [[{ questionKey: 'country', answerKey: 'other' }], 'country']
])(
  'If country = eu in hs-base get question footwearOrComponents',
  (questionAnswers, resultKey) => {
    const inputData = {
      questionAnswers
    }
    const result = createResult('', getQuestion(resultKey, base))

    expect(hsBase(inputData)).toStrictEqual(result)
  }
)
test.each([
  [
    [
      { questionKey: 'country', answerKey: 'eu' },
      { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
    ],
    'footwearYesYes'
  ],
  [
    [
      { questionKey: 'country', answerKey: 'eu' },
      { questionKey: 'footwearOrComponents', answerKey: 'components' }
    ],
    'componentsYesYes'
  ]
])(
  'If footwearOrComponents is footwear/components result is footwear/componentsYesYes',
  (questionAnswers, result) => {
    const inputData = {
      questionAnswers
    }

    expect(hsBase(inputData)).toStrictEqual(result)
  }
)
