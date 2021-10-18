import { calculatorFactory } from '../lib/calculator.js'
import { footwear } from '../questions/footwear.js'
import { createResult, getQuestion } from '../lib/helpers.js'

const calculator = calculatorFactory({ questions: 'simple' });
const footwearQuestionAnswers = [
  { questionKey: 'country', answerKey: 'eu' },
  { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
]

test('footwear', () => {
  let inputData, result
  inputData = {
    questionAnswers: [...footwearQuestionAnswers]
  }

  result = {
    question: getQuestion('upperType', footwear),
    code: '',
    partial: true
  }

  expect(calculator(inputData)).toStrictEqual(result)
})

describe.each([
  ['leather'],
  ['textile'],
  ['rubber'],
  ['plastic'],
  ['other']
])('Upper Type %s', (upperType) => {
  test('footwear => upperType', () => {
    let inputData, result

    inputData = {
      questionAnswers: [
        ...footwearQuestionAnswers,
        { questionKey: 'upperType', answerKey: upperType }
      ]
    }
    result = {
      question: getQuestion('sole', footwear),
      code: '',
      partial: true
    }

    expect(calculator(inputData)).toStrictEqual(result)
  })
})

describe.each([
  ['leather', 'leather', 'leatherStraps', '6403'],
  ['leather', 'imitationLeather', 'toeCap', '6403'],
  ['leather', 'rubber', 'toeCap', '6403'],
  ['leather', 'plastic', 'toeCap', '6403'],
  ['leather', 'wood', null, '6405100000'],
  ['leather', 'other', null, '6405100000'],

  ['textile', 'leather', 'slippers', '640420'],
  ['textile', 'imitationLeather', 'slippers', '640420'],
  ['textile', 'rubber', 'sports', '6404'],
  ['textile', 'plastic', 'sports', '6404'],
  ['textile', 'wood', null, '6405201000'],
  ['textile', 'other', 'slippers', '640520'],

  ['rubber', 'leather', null, '6405901000'],
  ['rubber', 'imitationLeather', null, '6405901000'],
  ['rubber', 'plastic', 'process', ''],
  ['rubber', 'rubber', 'process', ''],
  ['rubber', 'wood', null, '6405909000'],
  ['rubber', 'other', null, '6405909000'],

  ['plastic', 'leather', '', '6405901000'],
  ['plastic', 'imitationLeather', '', '6405901000'],
  ['plastic', 'plastic', 'process', ''],
  ['plastic', 'rubber', 'process', ''],
  ['plastic', 'wood', null, '6405909000'],
  ['plastic', 'other', null, '6405909000'],

  ['other', 'leather', null, '6405901000'],
  ['other', 'imitationLeather', null, '6405901000'],
  ['other', 'rubber', null, '6405901000'],
  ['other', 'plastic', null, '6405901000'],
  ['other', 'wood', null, '6405909000'],
  ['other', 'other', null, '6405909000']
])('uppertype=%s sole=%s', (upperType, sole, question, code) => {
  test('', () => {
    let inputData, result

    inputData = {
      questionAnswers: [
        ...footwearQuestionAnswers,
        { questionKey: 'upperType', answerKey: upperType },
        { questionKey: 'sole', answerKey: sole }
      ]
    }
    result = createResult(code, question ? getQuestion(question, footwear) : null)

    expect(calculator(inputData)).toStrictEqual(result)
  })
})

describe.each([
  ['moccasins', 'waterProof', '', ''],
  ['stichDown', 'waterProof', '', ''],
  ['doodyear', 'waterProof', '', ''],
  ['stichTurn', 'waterProof', '', ''],
  ['pegged', 'waterProof', '', ''],
  ['opanka', 'waterProof', '', ''],
  ['norwegian', 'waterProof', '', ''],
  ['bologna', 'waterProof', '', ''],
  ['blake', 'waterProof', '', ''],
  ['vulcanization', 'waterProof', '', ''],
  ['direct injection ', 'waterProof', '', ''],
  ['handStitched', 'waterProof', '']
])(
  'upper type =plastic sole=plastic process=%s ',
  (process, question, code) => {
    test('', () => {
      let inputData, result

      inputData = {
        questionAnswers: [
          ...footwearQuestionAnswers,
          { questionKey: 'upperType', answerKey: 'plastic' },
          { questionKey: 'sole', answerKey: 'plastic' },
          { questionKey: 'process', answerKey: process }
        ]
      }
      result = createResult(code, question ? getQuestion(question, footwear) : null)

      expect(calculator(inputData)).toStrictEqual(result)
    })
  }
)

describe('process and water proof', () => {
  describe.each([
    ['moccasins', 'yes', 'toeCap', '6401'],
    ['direct injection process', 'yes', 'toeCap', '6401'],
    ['handStitched', 'yes', 'toeCap', '6401'],

    ['stichDown', 'yes', 'winterSports', '6402'],
    ['goodyear', 'yes', 'winterSports', '6402'],
    ['stichTurn', 'yes', 'winterSports', '6402'],
    ['pegged', 'yes', 'winterSports', '6402'],
    ['opanka', 'yes', 'winterSports', '6402'],
    ['norwegian', 'yes', 'winterSports', '6402'],
    ['bologna', 'yes', 'winterSports', '6402'],
    ['blake', 'yes', 'winterSports', '6402'],
    ['vulcanization', 'yes', 'winterSports', '6402'],

    ['moccasins', 'no', 'winterSports', '6402'],
    ['direct injection process', 'no', 'winterSports', '6402'],
    ['handStitched', 'no', 'winterSports', '6402'],

    ['stichDown', 'no', 'winterSports', '6402'],
    ['goodyear', 'no', 'winterSports', '6402'],
    ['stichTurn', 'no', 'winterSports', '6402'],
    ['pegged', 'no', 'winterSports', '6402'],
    ['opanka', 'no', 'winterSports', '6402'],
    ['norwegian', 'no', 'winterSports', '6402'],
    ['bologna', 'no', 'winterSports', '6402'],
    ['blake', 'no', 'winterSports', '6402'],
    ['vulcanization', 'no', 'winterSports', '6402']
  ])(
    'process %s and waterProof %s',
    (process, waterProof, question, code) => {
      test('waterProof', () => {
        let inputData, result

        inputData = {
          questionAnswers: [
            ...footwearQuestionAnswers,
            { questionKey: 'upperType', answerKey: 'plastic' },
            { questionKey: 'sole', answerKey: 'plastic' },
            { questionKey: 'process', answerKey: process },
            { questionKey: 'waterProof', answerKey: waterProof }
          ]
        }
        result = createResult(code, question ? getQuestion(question, footwear) : null)

        expect(calculator(inputData)).toStrictEqual(result)
      })
    }
  )
})

describe('6401', () => {
  describe.each([['no', 'shaft', '6401']])(
    'water proof yes and toe cap %s ',
    (toeCap, question, code) => {
      test('process => water proof => toe cap', () => {
        let inputData, result

        inputData = {
          questionAnswers: [
            ...footwearQuestionAnswers,
            { questionKey: 'upperType', answerKey: 'plastic' },
            { questionKey: 'sole', answerKey: 'plastic' },
            { questionKey: 'process', answerKey: 'moccasins' },
            { questionKey: 'waterProof', answerKey: 'yes' },
            { questionKey: 'toeCap', answerKey: toeCap }
          ]
        }
        result = createResult(code, question ? getQuestion(question, footwear) : null)

        expect(calculator(inputData)).toStrictEqual(result)
      })
    }
  )
})

describe('6402', () => {
  describe.each([
    ['yes', null, 'skiBoots', '6402'],
    ['no', null, 'upperStrapsOrThongs', '6402'],
    ['no', 'no', 'shaft', '6402']
  ])(
    'winter sports=%s upperStrapsOrThongs=%s ',
    (winterSports, upperStrapsOrThongs, question, code) => {
      test('', () => {
        let inputData, result

        inputData = {
          questionAnswers: [
            ...footwearQuestionAnswers,
            { questionKey: 'upperType', answerKey: 'plastic' },
            { questionKey: 'sole', answerKey: 'plastic' },
            { questionKey: 'process', answerKey: 'moccasins' },
            { questionKey: 'waterProof', answerKey: 'no' },
            { questionKey: 'winterSports', answerKey: winterSports },
            {
              questionKey: 'upperStrapsOrThongs',
              answerKey: upperStrapsOrThongs
            }
          ]
        }
        result = createResult(code, question ? getQuestion(question, footwear) : null)

        expect(calculator(inputData)).toStrictEqual(result)
      })
    }
  )

  describe('640299', () => {
    describe.each([
      ['knee', null, 'slippers', '640299'],
      ['other', null, 'slippers', '640299'],
      ['other', 'no', 'vamp', '640299'],
      ['knee', 'no', 'vamp', '640299']
    ])(
      'toeCap is no upperType is plastic and slippers %s ',
      (shaft, slippers, question, code) => {
        test('', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...footwearQuestionAnswers,
              { questionKey: 'upperType', answerKey: 'plastic' },
              { questionKey: 'sole', answerKey: 'plastic' },
              { questionKey: 'process', answerKey: 'moccasins' },
              { questionKey: 'waterProof', answerKey: 'no' },
              { questionKey: 'winterSports', answerKey: 'no' },
              { questionKey: 'upperStrapsOrThongs', answerKey: 'no' },
              { questionKey: 'shaft', answerKey: shaft },
              { questionKey: 'toeCap', answerKey: 'no' },
              { questionKey: 'slippers', answerKey: slippers }
            ]
          }
          result = createResult(
            code,
            question ? getQuestion(question, footwear) : null
          )

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )
    describe.each([
      ['yes', null, 'heightOfSoleAndHeel', '640299'],
      ['no', null, 'lengthOfInsole', '640299'],
      ['no', 'yes', 'genderType', '640299']
    ])(
      'vamp =%s length of insole =%s ',
      (vamp, lengthOfInsole, question, code) => {
        test('', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...footwearQuestionAnswers,
              { questionKey: 'upperType', answerKey: 'plastic' },
              { questionKey: 'sole', answerKey: 'plastic' },
              { questionKey: 'process', answerKey: 'moccasins' },
              { questionKey: 'waterProof', answerKey: 'no' },
              { questionKey: 'winterSports', answerKey: 'no' },
              { questionKey: 'upperStrapsOrThongs', answerKey: 'no' },
              { questionKey: 'shaft', answerKey: 'knee' },
              { questionKey: 'toeCap', answerKey: 'no' },
              { questionKey: 'slippers', answerKey: 'no' },
              { questionKey: 'vamp', answerKey: vamp },
              { questionKey: 'lengthOfInsole', answerKey: lengthOfInsole }
            ]
          }
          result = createResult(
            code,
            question ? getQuestion(question, footwear) : null
          )

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )
  })
})
describe('6403', () => {
  describe.each([
    ['leather', null, 'ankle', 'madeOnBase', '640351'],
    ['leather', null, 'knee', 'lengthOfInsole', '640351'],
    ['leather', null, 'other', 'madeOnBase', '640359'],

    ['imitationLeather', 'no', null, 'shaft', '6403'],
    ['imitationLeather', 'no', 'ankle', 'madeOnBase', '640391'],
    ['imitationLeather', 'no', 'knee', 'sports', '640391'],
    ['imitationLeather', 'no', 'other', 'madeOnBase', '6403xx'],

    ['rubber', 'no', null, 'shaft', '6403'],
    ['rubber', 'no', 'ankle', 'madeOnBase', '640391'],
    ['rubber', 'no', 'knee', 'sports', '640391'],
    ['rubber', 'no', 'other', 'madeOnBase', '6403xx'],

    ['plastic', 'no', null, 'shaft', '6403'],
    ['plastic', 'no', 'ankle', 'madeOnBase', '640391'],
    ['plastic', 'no', 'knee', 'sports', '640391'],
    ['plastic', 'no', 'other', 'madeOnBase', '6403xx']
  ])(
    'leather shoes with %s sole, toeCap=%s, shaft=%s',
    (sole, toeCap, shaft, question, code) => {
      test(' ', () => {
        let inputData, result

        inputData = {
          questionAnswers: [
            ...footwearQuestionAnswers,
            { questionKey: 'upperType', answerKey: 'leather' },
            { questionKey: 'sole', answerKey: sole },
            { questionKey: 'toeCap', answerKey: toeCap },
            { questionKey: 'leatherStraps', answerKey: 'no' },
            { questionKey: 'shaft', answerKey: shaft }
          ]
        }
        result = createResult(code, question ? getQuestion(question, footwear) : null)

        expect(calculator(inputData)).toStrictEqual(result)
      })
    }
  )

  describe('640351', () => {
    const questionAnswers640351 = [
      ...footwearQuestionAnswers,
      { questionKey: 'upperType', answerKey: 'leather' },
      { questionKey: 'sole', answerKey: 'leather' },
      { questionKey: 'leatherStraps', answerKey: 'no' },
      { questionKey: 'shaft', answerKey: 'ankle' }
    ]

    describe.each([
      ['yes', 'handmade', '640351'],
      ['no', 'lengthOfInsole', '640351']
    ])(
      'leather shoes with leather sole, leatherStraps is no, shaft is ankle and made on base is =%s',
      (madeOnBase, question, code) => {
        test(' ', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...questionAnswers640351,
              { questionKey: 'madeOnBase', answerKey: madeOnBase }
            ]
          }
          result = createResult(
            code,
            question ? getQuestion(question, footwear) : null
          )

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )

    describe.each([['yes', 'genderType', '640351']])(
      'length of insole ',
      (lengthOfInsole, question, code) => {
        test(' ', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...footwearQuestionAnswers,
              { questionKey: 'upperType', answerKey: 'leather' },
              { questionKey: 'sole', answerKey: 'leather' },
              { questionKey: 'leatherStraps', answerKey: 'no' },
              { questionKey: 'shaft', answerKey: 'knee' },
              { questionKey: 'lengthOfInsole', answerKey: lengthOfInsole }
            ]
          }
          result = createResult(
            code,
            question ? getQuestion(question, footwear) : null
          )

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )
  })
})
