import taricFootwear from './taric-footwear.js'
import { footwear } from '../questions/footwear.js'
import { createResult, getQuestion } from '../lib/helpers.js'

const footwearQuestionAnswers = [
  { questionKey: 'country', answerKey: 'eu' },
  { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
]

test.each([
  // 6401
  ['640110', [], '6401100000'],
  ['640192', [{ upperType: 'rubber' }], '6401921000'],
  ['640192', [{ upperType: 'plastic' }], '6401929000'],
  ['640199', [{ shaft: 'knee' }], '6401990010'],
  ['640199', [{ shaft: 'other' }], '6401990090'],

  // 6402
  ['640212', [{ skiBoots: 'skiBoots' }], '6402121000'],
  ['640212', [{ skiBoots: 'snowboardBoots' }], '6402129000'],
  ['640219', [], '6402190000'],
  ['640220', [], '6402200000'],
  ['640291', [{ toeCap: 'yes' }], '6402911000'],
  ['640291', [{ toeCap: 'no' }], '6402919000'],
  // 640299
  ['640299', [{ toeCap: 'yes' }], '6402990500'],
  ['640299', [{ toeCap: 'no' }, { upperType: 'rubber' }], '6402991000'],
  [
    '640299',
    [{ toeCap: 'no' }, { upperType: 'plastic' }],
    { code: '640299', questionKey: 'slippers' }
  ],
  [
    '640299',
    [{ toeCap: 'no' }, { upperType: 'plastic' }, { slippers: 'yes' }],
    '6402995000'
  ],
  [
    '640299',
    [{ toeCap: 'no' }, { upperType: 'plastic' }, { slippers: 'no' }],
    { code: '640299', questionKey: 'vamp' }
  ],
  // Vamp = Yes
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'yes' }
    ],
    { code: '640299', questionKey: 'heightOfSoleAndHeel' }
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'yes' }
    ],
    '6402993100'
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' }
    ],
    '6402993900'
  ],
  // Vamp = No
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' }
    ],
    { code: '640299', questionKey: 'lengthOfInsole' }
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'no' }
    ],
    '6402999100'
  ],
  // LengthOfInsole = Yes
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'yes' }
    ],
    { code: '640299', questionKey: 'genderType' }
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6402999600'
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6402999800'
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'other' }
    ],
    '6402999300'
  ]
])('TBD', (hsCode, questionAnswersSimpleFormat, resultData) => {
  let questionAnswers = []

  Object.entries(questionAnswersSimpleFormat).forEach(([questionKey, val]) => {
    const qas = Object.keys(val)
      .map((e) => ({
        questionKey: e,
        answerKey: val[e]
      }))
      .flat()
    questionAnswers.push.apply(questionAnswers, qas)
  })
  console.log('questionanswers: ', questionAnswers)
  const inputData = {
    questionAnswers: [...footwearQuestionAnswers, ...questionAnswers]
  }
  const resultCode = resultData.code || resultData
  const question = resultData.questionKey
    ? getQuestion(resultData.questionKey, footwear)
    : null
  const result = createResult(resultCode, question)
  console.log('resultData: ', resultData)
  console.log('question: ', question)
  console.log('result: ', result)
  console.log('inputData: ', inputData)
  console.log('expected', taricFootwear(inputData, hsCode))
  expect(taricFootwear(inputData, hsCode)).toStrictEqual(result)
})
