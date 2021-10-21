import hsFootwear from './hs-footwear.js'
import { footwear } from '../questions/footwear.js'
import { createResult, getQuestion } from '../lib/helpers.js'

// Helper fn
// Takes our complex/multi data structure, turns that data structure into all test cases flattened, and runs them
function multiTestCasesTestRunner(
  questionAnswerCollectionMutlipleAnswers,
  result
) {
  let table = []

  Object.entries(questionAnswerCollectionMutlipleAnswers).forEach(
    ([questionKey, val]) => {
      function getAnswerKeyList(questionKey, val) {
        if (val === '*')
          return getQuestion(questionKey, footwear).answers.map(
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
    }
  )

  // Empty case (first case)
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
      questionAnswers: [
        // TODO: Move this out of here? See hs-footwear.js
        { questionKey: 'country', answerKey: 'eu' },
        { questionKey: 'footwearOrComponents', answerKey: 'footwear' },
        ...questionAnswers
      ]
    }

    const actualResult = hsFootwear(inputData, (inputData, code) => code)

    const expectedResult = result.questionKey
      ? createResult(result.code, getQuestion(result.questionKey, footwear))
      : result

    expect(expectedResult).toStrictEqual(actualResult)
  })
}

describe('Base Questions', () => {
  describe.each([
    [{}, { code: '', questionKey: 'upperType' }],
    [{ upperType: '*' }, { code: '', questionKey: 'sole' }],
    [{ sole: '*' }, { code: '', questionKey: 'upperType' }]
  ])('', multiTestCasesTestRunner)
})

describe('6401/6402 Base Questions', () => {
  describe.each([
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['rubber', 'plastic']
      },
      { code: '', questionKey: 'process' }
    ],
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['rubber', 'plastic'],
        process: '*'
      },
      { code: '', questionKey: 'waterProof' }
    ],
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['rubber', 'plastic'],
        waterProof: '*'
      },
      { code: '', questionKey: 'process' }
    ]
  ])('', multiTestCasesTestRunner)
})

describe('6401', () => {
  describe.each([
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['rubber', 'plastic'],
        waterProof: 'yes',
        process: ['cementing', 'vulcanization', 'direct injection process']
      },
      { code: '6401', questionKey: 'toeCap' }
    ],
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['rubber', 'plastic'],
        waterProof: 'yes',
        process: ['cementing', 'vulcanization', 'direct injection process'],
        toeCap: 'yes'
      },
      '640110'
    ],
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['rubber', 'plastic'],
        waterProof: 'yes',
        process: ['cementing', 'vulcanization', 'direct injection process'],
        toeCap: 'no'
      },
      { code: '6401', questionKey: 'shaft' }
    ],
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['rubber', 'plastic'],
        waterProof: 'yes',
        process: ['cementing', 'vulcanization', 'direct injection process'],
        toeCap: 'no',
        shaft: 'ankle'
      },
      '640192'
    ],
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['rubber', 'plastic'],
        waterProof: 'yes',
        process: ['cementing', 'vulcanization', 'direct injection process'],
        toeCap: 'no',
        shaft: 'knee'
      },
      '640199'
    ],
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['rubber', 'plastic'],
        waterProof: 'yes',
        process: ['cementing', 'vulcanization', 'direct injection process'],
        toeCap: 'no',
        shaft: 'other'
      },
      '640199'
    ]
  ])('', multiTestCasesTestRunner)
})

describe('6402', () => {
  describe.each([
    {
      upperType: ['rubber', 'plastic'],
      sole: ['rubber', 'plastic'],
      waterProof: 'yes',
      process: [
        'moccasins',
        'stichDown',
        'goodyear',
        'stichTurn',
        'pegged',
        'opanka',
        'norwegian',
        'bologna',
        'blake',
        'handStitched'
      ]
    },
    {
      upperType: ['rubber', 'plastic'],
      sole: ['rubber', 'plastic'],
      waterProof: 'no',
      process: '*'
    }
  ])('', (baseFor6402) => {
    describe.each([
      [
        {
          ...baseFor6402
        },
        { code: '6402', questionKey: 'winterSports' }
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'yes'
        },
        { code: '6402', questionKey: 'skiBoots' }
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'yes',
          skiBoots: 'skiBoots'
        },
        '640212'
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'yes',
          skiBoots: 'snowboardBoots'
        },
        '640212'
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'yes',
          skiBoots: 'other'
        },
        '640219'
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'no'
        },
        { code: '6402', questionKey: 'upperStrapsOrThongs' }
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'no',
          upperStrapsOrThongs: 'yes'
        },
        '640220'
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'no',
          upperStrapsOrThongs: 'no'
        },
        { code: '6402', questionKey: 'shaft' }
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'no',
          upperStrapsOrThongs: 'no',
          shaft: 'ankle'
        },
        '640291'
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'no',
          upperStrapsOrThongs: 'no',
          shaft: 'knee'
        },
        '640299'
      ],
      [
        {
          ...baseFor6402,
          winterSports: 'no',
          upperStrapsOrThongs: 'no',
          shaft: 'other'
        },
        '640299'
      ]
      // TODO: The rest...
    ])('', multiTestCasesTestRunner)
  })
})

describe.only('6403', () => {
  describe.each([
    [
      {
        upperType: 'leather',
        sole: 'leather'
      },
      { code: '6403', questionKey: 'leatherStraps' }
    ],
    [
      {
        upperType: 'leather',
        sole: 'leather',
        leatherStraps: 'yes'
      },
      '640320'
    ],
    [
      {
        upperType: 'leather',
        sole: 'leather',
        leatherStraps: 'no'
      },
      { code: '6403', questionKey: 'shaft' }
    ],
    [
      {
        upperType: 'leather',
        sole: 'leather',
        leatherStraps: 'no',
        shaft: 'ankle'
      },
      '640351'
    ],
    [
      {
        upperType: 'leather',
        sole: 'leather',
        leatherStraps: 'no',
        shaft: 'knee'
      },
      '640351'
    ],
    [
      {
        upperType: 'leather',
        sole: 'leather',
        leatherStraps: 'no',
        shaft: 'other'
      },
      '640359'
    ],
    [
      {
        upperType: 'leather',
        sole: ['imitationLeather', 'rubber', 'plastic']
      },
      { code: '6403', questionKey: 'toeCap' }
    ],
    [
      {
        upperType: 'leather',
        sole: ['imitationLeather', 'rubber', 'plastic'],
        toeCap: 'yes'
      },
      '640340'
    ],
    [
      {
        upperType: 'leather',
        sole: ['imitationLeather', 'rubber', 'plastic'],
        toeCap: 'no'
      },
      { code: '6403', questionKey: 'shaft' }
    ],
    [
      {
        upperType: 'leather',
        sole: ['imitationLeather', 'rubber', 'plastic'],
        toeCap: 'no',
        shaft: 'ankle'
      },
      '640391'
    ],
    [
      {
        upperType: 'leather',
        sole: ['imitationLeather', 'rubber', 'plastic'],
        toeCap: 'no',
        shaft: 'knee'
      },
      '640391'
    ],
    [
      {
        upperType: 'leather',
        sole: ['imitationLeather', 'rubber', 'plastic'],
        toeCap: 'no',
        shaft: 'other'
      },
      '6403xx'
    ]
  ])('', multiTestCasesTestRunner)
})

describe('6404', () => {
  describe.each([
    [
      {
        upperType: 'textile',
        sole: ['leather', 'imitationLeather']
      },
      '640420'
    ],
    [
      {
        upperType: 'textile',
        sole: ['rubber', 'plastic']
      },
      { code: '6404', questionKey: 'sports' }
    ]
    // TODO: The rest...
  ])('', multiTestCasesTestRunner)
})

describe('6405', () => {
  describe.each([
    [
      {
        upperType: 'leather',
        sole: ['wood', 'other']
      },
      '640510'
    ],
    [
      {
        upperType: 'textile',
        sole: ['wood', 'other']
      },
      '640520'
    ],
    [
      {
        upperType: ['rubber', 'plastic'],
        sole: ['leather', 'imitationLeather', 'wood', 'other']
      },
      '640590'
    ],
    [
      {
        upperType: 'other',
        sole: '*'
      },
      '640590'
    ]
  ])('', multiTestCasesTestRunner)
})
