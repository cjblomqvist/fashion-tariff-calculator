import hsFootwear from './hs-footwear.js'
import { footwear } from '../questions/footwear.js'
import { createResult, getQuestion } from '../lib/helpers.js'

// Helper fn
// Takes our complex/multi data structure, turns that data structure into all test cases flattened, and runs them
function multiTestCasesTestRunner(questionAnswerCollectionMutlipleAnswers, result) {
  let table = [];

  Object.entries(questionAnswerCollectionMutlipleAnswers).forEach(([questionKey, val]) => {
    function getAnswerKeyList(questionKey, val) {
      if(val === '*') return getQuestion(questionKey, footwear).answers.map(answer => answer.key);

      if(Array.isArray(val)) return val;

      return [val];
    }

    const answerKeyList = getAnswerKeyList(questionKey, val);

    if(!table.length) {
      table = answerKeyList.map(answerKey => {
        return { [questionKey]: answerKey };
      });
    } else {
      table = answerKeyList.map(answerKey => {
        return table.map(questionAnswerCollection => {
          return {
            ...questionAnswerCollection,
            [questionKey]: answerKey
          };
        });
      }).flat();
    }
  });

  // Empty case (first case)
  if(!table.length) {
    table = [{}];
  }

  test.each(table)(
    '',
    (questionAnswerCollection) => {
      const questionAnswers = Object.entries(questionAnswerCollection).map(([questionKey, answerKey]) => {
        return { questionKey, answerKey };
      });
      const inputData = {
        questionAnswers: [
          // TODO: Move this out of here? See hs-footwear.js
          { questionKey: 'country', answerKey: 'eu' },
          { questionKey: 'footwearOrComponents', answerKey: 'footwear' },
          ...questionAnswers
        ]
      };

      const actualResult = hsFootwear(inputData, (inputData, code) => code);

      const expectedResult = result.questionKey
        ? createResult(result.code, getQuestion(result.questionKey, footwear))
        : result;

      expect(expectedResult).toStrictEqual(actualResult);
    }
  );
}

describe('Base Questions', () => {
  describe.each([
    [
      {},
      { code: '', questionKey: 'upperType' }
    ],
    [
      { upperType: '*' },
      { code: '', questionKey: 'sole' }
    ],
    [
      { sole: '*' },
      { code: '', questionKey: 'upperType' }
    ]
  ])(
    '',
    multiTestCasesTestRunner
  )
});

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
  ])(
    '',
    multiTestCasesTestRunner
  )
});

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
    ]
    // TODO: The rest...
  ])(
    '',
    multiTestCasesTestRunner
  )
});

describe('6402', () => {
  describe.each([
    {
      upperType: ['rubber', 'plastic'],
      sole: ['rubber', 'plastic'],
      waterProof: 'yes',
      process: ['moccasins', 'stichDown', 'goodyear', 'stichTurn', 'pegged', 'opanka', 'norwegian', 'bologna', 'blake', 'handStitched']
    },
    {
      upperType: ['rubber', 'plastic'],
      sole: ['rubber', 'plastic'],
      waterProof: 'no',
      process: '*'
    }
  ])(
    '',
    (baseFor6402) => {
      describe.each([
        [
          {
            ...baseFor6402
          },
          { code: '6402', questionKey: 'winterSports' }
        ],
        // TODO: The rest...
      ])(
        '',
        multiTestCasesTestRunner
      )
    }
  )
})

describe('6403', () => {
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
        sole: ['imitationLeather', 'rubber', 'plastic']
      },
      { code: '6403', questionKey: 'toeCap' }
    ],
    // TODO: The rest...
  ])(
    '',
    multiTestCasesTestRunner
  )
});

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
    ],
    // TODO: The rest...

  ])(
    '',
    multiTestCasesTestRunner
  )
});

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
  ])(
    '',
    multiTestCasesTestRunner
  )
});
