import { calculatorFactory } from '../lib/calculator.js'
import { footwear } from '../questions/footwear.js'
import { createResult, getQuestion } from '../lib/helpers.js'

const calculator = calculatorFactory({ questions: 'simple' });
const footwearQuestionAnswers = [
  { questionKey: 'country', answerKey: 'eu' },
  { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
]

describe('6401', () => {
  describe('640199,640192', () => {
    describe.each([
      ['rubber', 'ankle', null, '6401921000'],
      ['plastic', 'ankle', null, '6401929000'],
      ['plastic', 'knee', null, '6401990010'],
      ['rubber', 'knee', null, '6401990010'],
      ['plastic', 'other', null, '6401990090'],
      ['rubber', 'other', null, '6401990090']
    ])('toe cap no and shaft %s  ', (upperType, shaft, question, code) => {
      test('', () => {
        let inputData, result

        inputData = {
          questionAnswers: [
            ...footwearQuestionAnswers,
            { questionKey: 'upperType', answerKey: upperType },
            { questionKey: 'sole', answerKey: 'plastic' },
            { questionKey: 'process', answerKey: 'moccasins' },
            { questionKey: 'waterProof', answerKey: 'yes' },
            { questionKey: 'toeCap', answerKey: 'no' },
            { questionKey: 'shaft', answerKey: shaft }
          ]
        }
        result = createResult(code, question ? getQuestion(question, footwear) : null)

        expect(calculator(inputData)).toStrictEqual(result)
      })
    })
  })
  describe('640110 ', () => {
    describe.each([['yes', null, '6401100000']])(
      'toe cap= %s  ',
      (toeCap, question, code) => {
        test('', () => {
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
})

describe('6402', () => {
  describe('640299,640291', () => {
    describe.each([
      ['no', 'plastic', 'ankle', 'yes', null, null, '6402911000'],
      ['no', 'plastic', 'ankle', 'no', null, null, '6402919000'],
      ['no', 'plastic', 'knee', 'yes', null, null, '6402990500'],
      ['no', 'plastic', 'other', 'yes', null, null, '6402990500'],

      ['no', 'plastic', 'knee', 'no', 'yes', null, '6402995000'],
      ['no', 'plastic', 'other', 'no', 'yes', null, '6402995000'],

      ['no', 'rubber', 'knee', 'no', null, null, '6402991000'],
      ['no', 'rubber', 'other', 'no', null, null, '6402991000'],
      ['yes', 'plastic', null, null, null, null, '6402200000'],
      ['yes', 'rubber', null, null, null, null, '6402200000']
    ])(
      'upperStrapsOrThongs =%s upper type= %s and shaft = %s and toe cap = %s slippers=%s',
      (
        upperStrapsOrThongs,
        upperType,
        shaft,
        toeCap,
        slippers,
        question,
        code
      ) => {
        test('', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...footwearQuestionAnswers,
              { questionKey: 'upperType', answerKey: upperType },
              { questionKey: 'sole', answerKey: 'plastic' },
              { questionKey: 'process', answerKey: 'moccasins' },
              { questionKey: 'waterProof', answerKey: 'no' },
              { questionKey: 'winterSports', answerKey: 'no' },
              {
                questionKey: 'upperStrapsOrThongs',
                answerKey: upperStrapsOrThongs
              },
              { questionKey: 'shaft', answerKey: shaft },
              { questionKey: 'toeCap', answerKey: toeCap },
              { questionKey: 'slippers', answerKey: slippers }
            ]
          }
          result = createResult(code, question ? getQuestion(question, footwear) : null)

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )
  })

  describe.each([
    ['skiBoots', null, '6402121000'],
    ['snowboardBoots', null, '6402129000'],
    ['other', null, '6402190000']
  ])('winter sports yes and ski boots %s ', (skiBoots, question, code) => {
    test('upper type => sole => process => water proof => winter sports => skiBoots=%s', () => {
      let inputData, result

      inputData = {
        questionAnswers: [
          ...footwearQuestionAnswers,
          { questionKey: 'upperType', answerKey: 'plastic' },
          { questionKey: 'sole', answerKey: 'plastic' },
          { questionKey: 'process', answerKey: 'moccasins' },
          { questionKey: 'waterProof', answerKey: 'no' },
          { questionKey: 'winterSports', answerKey: 'yes' },
          { questionKey: 'skiBoots', answerKey: skiBoots }
        ]
      }
      result = createResult(code, question ? getQuestion(question, footwear) : null)

      expect(calculator(inputData)).toStrictEqual(result)
    })
  })

  describe.each([
    ['yes', null, '6402993100'],
    ['no', null, '6402993900']
  ])(
    'toeCap is no upperType is plastic and slippers no and vamp yes and heightOfSoleAndHeel =%s ',
    (heightOfSoleAndHeel, question, code) => {
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
            { questionKey: 'vamp', answerKey: 'yes' },
            {
              questionKey: 'heightOfSoleAndHeel',
              answerKey: heightOfSoleAndHeel
            }
          ]
        }
        result = createResult(code, question ? getQuestion(question, footwear) : null)

        expect(calculator(inputData)).toStrictEqual(result)
      })
    }
  )

  describe.each([
    ['yes', 'men', null, '6402999600'],
    ['yes', 'women', null, '6402999800'],
    ['yes', 'unisex/other', null, '6402999300'],
    ['no', null, null, '6402999100']
  ])(
    'length of insole =%s gendertypr=%s',
    (lengthOfInsole, genderType, question, code) => {
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
            { questionKey: 'vamp', answerKey: 'no' },
            { questionKey: 'lengthOfInsole', answerKey: lengthOfInsole },
            { questionKey: 'genderType', answerKey: genderType }
          ]
        }
        result = createResult(code, question ? getQuestion(question, footwear) : null)

        expect(calculator(inputData)).toStrictEqual(result)
      })
    }
  )
})

describe('6403', () => {
  describe.each([
    ['leather', 'yes', null, null, '6403200000'],
    ['imitationLeather', null, 'yes', null, '6403400000'],
    ['rubber', null, 'yes', null, '6403400000'],
    ['plastic', null, 'yes', null, '6403400000']
  ])(
    'uppertype=leather sole=%s straps=%s toeCap=%s ',
    (sole, leatherStraps, toeCap, question, code) => {
      test(' ', () => {
        let inputData, result

        inputData = {
          questionAnswers: [
            ...footwearQuestionAnswers,
            { questionKey: 'upperType', answerKey: 'leather' },
            { questionKey: 'sole', answerKey: sole },
            { questionKey: 'leatherStraps', answerKey: leatherStraps },
            { questionKey: 'toeCap', answerKey: toeCap }
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
      ['yes', null, '6403510510'],
      ['no', null, '6403510590']
    ])('made on base is yes and handmade=%s', (handmade, question, code) => {
      test(' ', () => {
        let inputData, result

        inputData = {
          questionAnswers: [
            ...questionAnswers640351,
            { questionKey: 'madeOnBase', answerKey: 'yes' },
            { questionKey: 'handmade', answerKey: handmade }
          ]
        }
        result = createResult(code, question ? getQuestion(question, footwear) : null)

        expect(calculator(inputData)).toStrictEqual(result)
      })
    })

    describe.each([
      ['yes', 'men', null, '6403511500'],
      ['yes', 'women', null, '6403511900'],
      ['yes', 'unisex/other', null, '6403511900'],
      ['no', null, null, '6403511100']
    ])(
      'length of insole =%s and gendertype=%s',
      (lengthOfInsole, genderType, question, code) => {
        test(' ', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...footwearQuestionAnswers,
              { questionKey: 'upperType', answerKey: 'leather' },
              { questionKey: 'sole', answerKey: 'leather' },
              { questionKey: 'leatherStraps', answerKey: 'no' },
              { questionKey: 'shaft', answerKey: 'knee' },
              { questionKey: 'lengthOfInsole', answerKey: lengthOfInsole },
              { questionKey: 'genderType', answerKey: genderType }
            ]
          }
          result = createResult(code, question ? getQuestion(question, footwear) : null)

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )
  })

  describe('640359', () => {
    const questionAnswers650359 = [
      ...footwearQuestionAnswers,
      { questionKey: 'upperType', answerKey: 'leather' },
      { questionKey: 'sole', answerKey: 'leather' },
      { questionKey: 'leatherStraps', answerKey: 'no' },
      { questionKey: 'shaft', answerKey: 'other' }
    ]

    describe.each([
      ['yes', null, 'handmade', '640359'],
      ['yes', 'yes', null, '6403590510'],
      ['yes', 'no', null, '6403590590'],
      ['no', null, 'vamp', '640359']
    ])(
      ' made on base =%s handmade = %s)',
      (madeOnBase, handmade, question, code) => {
        test(' ', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...questionAnswers650359,
              { questionKey: 'madeOnBase', answerKey: madeOnBase },
              { questionKey: 'handmade', answerKey: handmade }
            ]
          }
          result = createResult(code, question ? getQuestion(question, footwear) : null)

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )

    describe.each([
      ['yes', null, 'heightOfSoleAndHeel', '640359'],
      ['yes', 'yes', null, '6403591100'],
      ['yes', 'no', 'lengthOfInsole', '640359'],
      ['no', null, 'slippers', '640359']
    ])(
      'leather straps = no => shaft = other => made on base =no => vamp => %s heightOfSoleAndHeel=>%s)',
      (vamp, heightOfSoleAndHeel, question, code) => {
        test(' ', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...questionAnswers650359,
              { questionKey: 'madeOnBase', answerKey: 'no' },
              { questionKey: 'vamp', answerKey: vamp },
              {
                questionKey: 'heightOfSoleAndHeel',
                answerKey: heightOfSoleAndHeel
              }
            ]
          }
          result = createResult(code, question ? getQuestion(question, footwear) : null)

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )

    describe.each([
      ['yes', null, 'genderType', '640359'],
      ['yes', 'men', null, '6403593500'],
      ['yes', 'women', null, '6403593900'],
      ['yes', 'unisex/other', null, '6403593900'],
      ['no', null, null, '6403593100']
    ])(
      'vamp => yes heightOfSoleAndHeel=> no => length of insole=%s => genderType =>%s)',
      (lengthOfInsole, genderType, question, code) => {
        test(' ', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...questionAnswers650359,
              { questionKey: 'madeOnBase', answerKey: 'no' },
              { questionKey: 'vamp', answerKey: 'yes' },
              {
                questionKey: 'heightOfSoleAndHeel',
                answerKey: 'no'
              },
              { questionKey: 'lengthOfInsole', answerKey: lengthOfInsole },
              { questionKey: 'genderType', answerKey: genderType }
            ]
          }
          result = createResult(code, question ? getQuestion(question, footwear) : null)

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )

    describe.each([
      ['yes', null, null, null, '6403595000'],
      ['no', 'yes', null, 'genderType', '640359'],
      ['no', 'yes', 'men', null, '6403599500'],
      ['no', 'yes', 'women', null, '6403599900'],
      ['no', 'yes', 'unisex/other', null, '6403599900']
    ])(
      'leather straps=no => shaft=other => made on base =no => vamp=no => slippers=%s lengthOfInsole=%s genderType=%s',
      (slippers, lengthOfInsole, genderType, question, code) => {
        test(' ', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...questionAnswers650359,
              { questionKey: 'madeOnBase', answerKey: 'no' },
              { questionKey: 'vamp', answerKey: 'no' },
              { questionKey: 'slippers', answerKey: slippers },
              { questionKey: 'lengthOfInsole', answerKey: lengthOfInsole },
              { questionKey: 'genderType', answerKey: genderType }
            ]
          }
          result = createResult(code, question ? getQuestion(question, footwear) : null)

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )
  })

  describe('64039', () => {
    const questionAnswers640391 = [
      ...footwearQuestionAnswers,
      { questionKey: 'upperType', answerKey: 'leather' },
      { questionKey: 'sole', answerKey: 'rubber' },
      { questionKey: 'toeCap', answerKey: 'no' }
    ]

    describe('shaft=ankle', () => {
      describe.each([
        [null, null, null, null, 'madeOnBase', '640391'],
        ['yes', null, null, null, 'handmade', '640391'],
        ['yes', null, null, 'yes', , '6403910510'],
        ['yes', null, null, 'no', , '6403910590'],
        ['no', null, null, null, 'lengthOfInsole', '640391'],
        ['no', 'no', null, null, null, '6403919100'],
        ['no', 'yes', null, null, 'genderType', '640391'],
        ['no', 'yes', 'men', null, null, '6403919600'],
        ['no', 'yes', 'women', null, null, '6403919800'],
        ['no', 'yes', 'unisex/other', null, null, '6403919300']
      ])(
        'madeOnBase=%s lengthOfInsole=%s genderType=%s handmade=%s',
        (
          madeOnBase,
          lengthOfInsole,
          genderType,
          handmade,
          question,
          code
        ) => {
          test(' ', () => {
            let inputData, result

            inputData = {
              questionAnswers: [
                ...questionAnswers640391,
                { questionKey: 'shaft', answerKey: 'ankle' },
                { questionKey: 'madeOnBase', answerKey: madeOnBase },
                {
                  questionKey: 'lengthOfInsole',
                  answerKey: lengthOfInsole
                },
                { questionKey: 'genderType', answerKey: genderType },
                { questionKey: 'handmade', answerKey: handmade }
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

    describe('shaft=knee', () => {
      describe.each([
        [null, null, null, 'sports', '640391'],
        ['yes', null, null, 'lengthOfInsole', '640391'],
        ['no', null, null, 'lengthOfInsole', '640391'],
        ['no', 'no', null, null, '6403911190'],
        ['yes', 'no', null, null, '6403911110'],
        ['no', 'yes', null, 'genderType', '640391'],
        ['yes', 'yes', null, 'genderType', '640391'],
        ['no', 'yes', 'men', null, '6403911690'],
        ['yes', 'yes', 'men', null, '6403911610'],
        ['no', 'yes', 'women', null, '6403911890'],
        ['yes', 'yes', 'women', null, '6403911810'],
        ['no', 'yes', 'unisex/other', null, '6403911390'],
        ['yes', 'yes', 'unisex/other', null, '6403911310']
      ])(
        'sports=%s lengthOfInsole=%s genderType=%s',
        (sports, lengthOfInsole, genderType, question, code) => {
          test(' ', () => {
            let inputData, result

            inputData = {
              questionAnswers: [
                ...questionAnswers640391,
                { questionKey: 'shaft', answerKey: 'knee' },
                { questionKey: 'sports', answerKey: sports },
                {
                  questionKey: 'lengthOfInsole',
                  answerKey: lengthOfInsole
                },
                { questionKey: 'genderType', answerKey: genderType }
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

  describe('6403XX', () => {
    const questionAnswers6403xx = [
      ...footwearQuestionAnswers,
      { questionKey: 'upperType', answerKey: 'leather' },
      { questionKey: 'sole', answerKey: 'rubber' },
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'shaft', answerKey: 'other' }
    ]

    describe('madeOnBase', () => {
      describe.each([
        [null, null, 'madeOnBase', '6403xx'],
        ['yes', null, 'handmade', '640399'],
        ['yes', 'yes', null, '6403990510'],
        ['yes', 'no', null, '6403990590'],
        ['no', null, 'vamp', '640399']
      ])(
        'madeOnBase=%s handmade=%s',
        (madeOnBase, handmade, question, code) => {
          test(' ', () => {
            let inputData, result

            inputData = {
              questionAnswers: [
                ...questionAnswers6403xx,
                { questionKey: 'madeOnBase', answerKey: madeOnBase },
                { questionKey: 'handmade', answerKey: handmade }
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

    describe('vamp', () => {
      describe.each([
        ['yes', null, null, null, null, 'heightOfSoleAndHeel', '640399'],
        ['yes', 'yes', null, null, null, null, '6403991100'],
        ['yes', 'no', null, null, null, 'lengthOfInsole', '640399'],
        ['yes', 'no', null, 'yes', null, 'genderType', '640399'],
        ['yes', 'no', null, 'yes', 'men', null, '6403993600'],
        ['yes', 'no', null, 'yes', 'women', null, '6403993800'],
        ['yes', 'no', null, 'yes', 'unisex/other', null, '6403993300'],
        ['yes', 'no', null, 'no', null, null, '6403993100'],
        ['no', null, null, null, null, 'slippers', '640399'],
        ['no', null, 'yes', null, null, null, '6403995000'],
        ['no', null, 'no', null, null, 'winterSports', '6403xx']
      ])(
        'vamp=%s heightOfSoleAndHeel=%s slippers=%s lengthOfInsole=%s genderType=%s     ',
        (
          vamp,
          heightOfSoleAndHeel,
          slippers,
          lengthOfInsole,
          genderType,
          question,
          code
        ) => {
          test(' ', () => {
            let inputData, result

            inputData = {
              questionAnswers: [
                ...questionAnswers6403xx,
                { questionKey: 'madeOnBase', answerKey: 'no' },
                { questionKey: 'vamp', answerKey: vamp },
                {
                  questionKey: 'heightOfSoleAndHeel',
                  answerKey: heightOfSoleAndHeel
                },
                { questionKey: 'slippers', answerKey: slippers },
                {
                  questionKey: 'lengthOfInsole',
                  answerKey: lengthOfInsole
                },
                { questionKey: 'genderType', answerKey: genderType }
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

    describe('winter sports', () => {
      describe.each([
        ['yes', null, null, null, null, 'skiBoots', '6403xx'],
        ['yes', 'skiBoots', null, null, null, null, '6403120000'],
        ['yes', 'snowboardBoots', null, null, null, null, '6403120000'],
        ['yes', 'other', null, null, null, null, '6403190000'],
        ['no', null, null, null, null, 'sports', '640399'],
        ['no', null, 'yes', null, null, 'lengthOfInsole', '640399'],
        ['no', null, 'no', null, null, 'lengthOfInsole', '640399'],
        ['no', null, 'no', 'yes', null, 'genderType', '640399'],
        ['no', null, 'no', 'yes', 'men', null, '6403999690'],
        ['no', null, 'yes', 'yes', 'men', null, '6403999610'],
        ['no', null, 'yes', 'yes', 'women', null, '6403999810'],
        ['no', null, 'no', 'yes', 'women', null, '6403999890'],
        ['no', null, 'no', 'yes', 'unisex/other', null, '6403999390'],
        ['no', null, 'yes', 'yes', 'unisex/other', null, '6403999310'],
        ['no', null, 'no', 'no', null, null, '6403999190'],
        ['no', null, 'yes', 'no', null, null, '6403999110']
      ])(
        'winterSports=%s skiBoots =%s sports=%s lengthOfInsole=%s genderType=%s',
        (
          winterSports,
          skiBoots,
          sports,
          lengthOfInsole,
          genderType,
          question,
          code
        ) => {
          test(' ', () => {
            let inputData, result

            inputData = {
              questionAnswers: [
                ...questionAnswers6403xx,
                { questionKey: 'madeOnBase', answerKey: 'no' },
                { questionKey: 'vamp', answerKey: 'no' },
                { questionKey: 'slippers', answerKey: 'no' },
                { questionKey: 'winterSports', answerKey: winterSports },
                { questionKey: 'skiBoots', answerKey: skiBoots },
                { questionKey: 'sports', answerKey: sports },
                {
                  questionKey: 'lengthOfInsole',
                  answerKey: lengthOfInsole
                },
                { questionKey: 'genderType', answerKey: genderType }
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
})
describe('6404', () => {
  const questionAnswers6404 = [
    ...footwearQuestionAnswers,
    { questionKey: 'upperType', answerKey: 'textile' }
  ]

  describe('460420', () => {
    describe.each([
      ['yes', null, '6404201000'],
      ['no', null, '6404209000']
    ])(
      'sole= imitationLeather or leather and slippers=%s ',
      (slippers, question, code) => {
        test(' ', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...questionAnswers6404,
              { questionKey: 'sole', answerKey: 'leather' },
              { questionKey: 'slippers', answerKey: slippers }
            ]
          }
          result = createResult(code, question ? getQuestion(question, footwear) : null)

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )
  })

  describe('460411,640419', () => {
    describe.each([
      ['yes', null, null, '6404110000'],
      ['no', null, 'slippers', '640419'],
      ['no', 'yes', null, '6404191000'],
      ['no', 'no', null, '6404199000']
    ])(
      'sole=rubber or plastic and sports=%s slippers=%s ',
      (sports, slippers, question, code) => {
        test(' ', () => {
          let inputData, result

          inputData = {
            questionAnswers: [
              ...questionAnswers6404,
              { questionKey: 'sole', answerKey: 'rubber' },
              { questionKey: 'sports', answerKey: sports },
              { questionKey: 'slippers', answerKey: slippers }
            ]
          }
          result = createResult(code, question ? getQuestion(question, footwear) : null)

          expect(calculator(inputData)).toStrictEqual(result)
        })
      }
    )
  })
})
describe('6405', () => {
  const questionAnswers6405 = [
    ...footwearQuestionAnswers,
    { questionKey: 'upperType', answerKey: 'textile' }
  ]

  describe('640520', () => {
    describe.each([
      ['yes', null, '6405209100'],
      ['no', null, '6405209900']
    ])('sole=other slippers=%s', (slippers, question, code) => {
      test(' ', () => {
        let inputData, result

        inputData = {
          questionAnswers: [
            ...questionAnswers6405,
            { questionKey: 'sole', answerKey: 'other' },
            { questionKey: 'slippers', answerKey: slippers }
          ]
        }
        result = createResult(code, question ? getQuestion(question, footwear) : null)
        expect(calculator(inputData)).toStrictEqual(result)
      })
    })
  })
})
