import taricFootwearComponents from './taric-footwear-components.js'

import { calculatorFactory } from '../lib/calculator.js'
import { components } from '../questions/components.js'
import { createResult, getQuestion } from '../lib/helpers.js'

const calculator = calculatorFactory({ questions: 'simple' })

test.each([
  // 640610
  ['640610', [], { code: '640610', questionKey: 'materialType' }],
  [
    '640610',
    [{ materialType: 'leather' }],
    { code: '640610', questionKey: 'handmade' }
  ],
  ['640610', [{ materialType: 'leather' }, { handmade: 'yes' }], '6406101010'],
  ['640610', [{ materialType: 'leather' }, { handmade: 'no' }], '6406101090'],
  [
    '640610',
    [
      {
        materialType: [
          'rubber',
          'plastic',
          'leatherOrCompositionLeather',
          'other'
        ]
      }
    ],
    { code: '640610', questionKey: 'handmade' }
  ],
  [
    '640610',
    [
      {
        materialType: 'other',
        handmade: 'yes'
      }
    ],
    '6406109010'
  ],
  [
    '640610',
    [
      {
        materialType: ['rubber', 'plastic', 'leatherOrCompositionLeather'],
        handmade: 'yes'
      }
    ],
    '6406109090'
  ],
  [
    '640610',
    [
      {
        materialType: [
          'rubber',
          'plastic',
          'leatherOrCompositionLeather',
          'other'
        ],
        handmade: 'no'
      }
    ],
    '6406109090'
  ],
  // 640620
  ['640620', [], { code: '640620', questionKey: 'materialType' }],
  [
    '640620',
    [{ materialType: 'rubber' }],
    { code: '640620', questionKey: 'handmade' }
  ],
  ['640620', [{ materialType: 'rubber', handmade: 'yes' }], '6406201010'],
  ['640620', [{ materialType: 'rubber', handmade: 'no' }], '6406201090'],
  ['640620', [{ materialType: 'plastic', handmade: 'yes' }], '6406209010'],
  [
    '640620',
    [
      {
        materialType: ['leatherOrCompositionLeather', 'other'],
        handmade: 'yes'
      }
    ],
    '6406209090'
  ],
  [
    '640620',
    [
      {
        materialType: ['plastic', 'leatherOrCompositionLeather', 'other'],
        handmade: 'no'
      }
    ],
    '6406209090'
  ],
  // 640690
  ['640690', [], { code: '640690', questionKey: 'handmade' }],
  [
    '640690',
    [{ part: ['withoutOuterSole', 'removable', 'outer', 'gaiters'] }],
    { code: '640690', questionKey: 'handmade' }
  ],
  ['640690', [{ part: 'withoutOuterSole', handmade: 'yes' }], '6406903010'],
  ['640690', [{ part: 'withoutOuterSole', handmade: 'no' }], '6406903090'],
  ['640690', [{ part: 'removable', handmade: 'yes' }], '6406905010'],
  ['640690', [{ part: 'removable', handmade: 'no' }], '6406905090'],
  [
    '640690',
    [
      {
        part: ['outer', 'gaiters']
      }
    ],
    { code: '640690', questionKey: 'handmade' }
  ],
  [
    '640690',
    [
      {
        part: 'outer',
        materialType: 'leatherOrCompositionLeather'
      }
    ],
    { code: '640690', questionKey: 'handmade' }
  ],
  [
    '640690',
    [
      {
        part: 'outer',
        materialType: 'leatherOrCompositionLeather',
        handmade: 'yes'
      }
    ],
    '6406906010'
  ],
  [
    '640690',
    [
      {
        part: 'outer',
        materialType: 'leatherOrCompositionLeather',
        handmade: 'no'
      }
    ],
    '6406906090'
  ],
  [
    '640690',
    [
      {
        part: 'gaiters',
        materialType: [
          'leather',
          'rubber',
          'plastic',
          'leatherOrCompositionLeather',
          'other'
        ],
        handmade: 'no'
      }
    ],
    '6406909090'
  ],
  [
    '640690',
    [
      {
        part: 'gaiters',
        materialType: [
          'leather',
          'rubber',
          'plastic',
          'leatherOrCompositionLeather',
          'other'
        ],
        handmade: 'yes'
      }
    ],
    '6406909020'
  ],
  [
    '640690',
    [
      {
        part: 'outer',
        materialType: ['leather', 'rubber', 'plastic', 'other'],
        handmade: 'yes'
      }
    ],
    '6406909090'
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
  const inputData = {
    questionAnswers: [...questionAnswers]
  }
  const resultCode = resultData.code || resultData
  const question = resultData.questionKey
    ? getQuestion(resultData.questionKey, components)
    : null
  const result = createResult(resultCode, question)

  expect(taricFootwearComponents(inputData, hsCode)).toStrictEqual(result)
})
