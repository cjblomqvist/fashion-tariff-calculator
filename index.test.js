import { calculator } from './calculator'
import { mapNewToOld } from './mapping/mapNewToOldQuestion'
import { mapOldToNew } from './mapping/mapOldToNewQuestion'
import { createResult } from './questions/createResult.js'
import { getQuestion } from './questions/getQuestion.js'
import { getNewQuestion } from './questions/getNewQuestion.js'
import { calculatorNew } from './calculatorNew'

describe('HS (Global)', () => {
  const taricQuestionAnswers = [{ questionKey: 'country', answerKey: 'eu' }]

  describe('Footwear', () => {
    const footwearQuestionAnswers = [
      ...taricQuestionAnswers,
      { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
    ]

    test('footwear', () => {
      let inputData, result
      inputData = {
        questionAnswers: [...footwearQuestionAnswers]
      }

      result = {
        question: getQuestion('upperType'),
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
          question: getQuestion('sole'),
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
        result = createResult(code, question ? getQuestion(question) : null)

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
          result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
                question ? getQuestion(question) : null
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
                question ? getQuestion(question) : null
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
            result = createResult(code, question ? getQuestion(question) : null)

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
                question ? getQuestion(question) : null
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
                question ? getQuestion(question) : null
              )

              expect(calculator(inputData)).toStrictEqual(result)
            })
          }
        )
      })
    })
  })
})

describe('TARIC (EU)', () => {
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
          result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
        result = createResult(code, question ? getQuestion(question) : null)

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
          result = createResult(code, question ? getQuestion(question) : null)

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
          result = createResult(code, question ? getQuestion(question) : null)

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
          result = createResult(code, question ? getQuestion(question) : null)

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
          result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
                question ? getQuestion(question) : null
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
                question ? getQuestion(question) : null
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
                question ? getQuestion(question) : null
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
                question ? getQuestion(question) : null
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
                question ? getQuestion(question) : null
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
            result = createResult(code, question ? getQuestion(question) : null)

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
            result = createResult(code, question ? getQuestion(question) : null)

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
          result = createResult(code, question ? getQuestion(question) : null)
          expect(calculator(inputData)).toStrictEqual(result)
        })
      })
    })
  })
})

describe('Mapping of questions', () => {
  test('country matches country', () => {
    const newQuestionAnswers = [{ questionKey: 'country', answerKey: 'eu' }]

    const oldQuestionAnswers = [{ questionKey: 'country', answerKey: 'eu' }]

    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })
  test('footwearOrComponents matches footwearOrComponents', () => {
    const newQuestionAnswers = [
      { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
    ]

    const oldQuestionAnswers = [
      { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
    ]

    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })

  test('upperType matches upperType', () => {
    const newQuestionAnswers = [
      { questionKey: 'upperType', answerKey: 'leather' }
    ]

    const oldQuestionAnswers = [
      { questionKey: 'upperType', answerKey: 'leather' }
    ]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })

  test('sole matches sole', () => {
    const newQuestionAnswers = [{ questionKey: 'sole', answerKey: 'leather' }]

    const oldQuestionAnswers = [{ questionKey: 'sole', answerKey: 'leather' }]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })

  test('gender matches genderType', () => {
    const newQuestionAnswers = [{ questionKey: 'gender', answerKey: 'man' }]

    const oldQuestionAnswers = [{ questionKey: 'genderType', answerKey: 'man' }]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })

  test('sandal matches vamp', () => {
    const newQuestionAnswers = [{ questionKey: 'sandal', answerKey: 'no' }]

    const oldQuestionAnswers = [{ questionKey: 'vamp', answerKey: 'no' }]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })

  test('skiBoots matches skiBoots', () => {
    const newQuestionAnswers = [{ questionKey: 'skiBoots', answerKey: 'other' }]

    const oldQuestionAnswers = [{ questionKey: 'skiBoots', answerKey: 'other' }]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })

  test('process matches process', () => {
    const newQuestionAnswers = [{ questionKey: 'process', answerKey: 'pegged' }]

    const oldQuestionAnswers = [{ questionKey: 'process', answerKey: 'pegged' }]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })

  test('Check if all answers are yes if they are "pressed"', () => {
    const newQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'slippers', answerKey: 'yes' },
      { questionKey: 'waterProof', answerKey: 'yes' },
      { questionKey: 'toeCap', answerKey: 'yes' },
      { questionKey: 'winterSports', answerKey: 'yes' }
    ]

    const oldQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'slippers', answerKey: 'yes' },
      { questionKey: 'waterProof', answerKey: 'yes' },
      { questionKey: 'toeCap', answerKey: 'yes' },
      { questionKey: 'winterSports', answerKey: 'yes' }
    ]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })
  test('Check if two answers are yes if they are "pressed"', () => {
    const newQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'slippers', answerKey: 'yes' }
    ]

    const oldQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'slippers', answerKey: 'yes' }
    ]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })
  test('Check if one answer is no and one is yes', () => {
    const newQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'slippers', answerKey: 'no' }
    ]

    const oldQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'slippers', answerKey: 'no' }
    ]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })
  test('Check if all answers are no if they are not "pressed"', () => {
    const newQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'waterProof', answerKey: 'no' },
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' }
    ]

    const oldQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'waterProof', answerKey: 'no' },
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' }
    ]
    expect(mapNewToOld(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })
  test('Mapping one old questionAnswer to one new questionAnswer', () => {
    const oldQuestionAnswers = [
      { questionKey: 'upperType', answerKey: 'leather' }
    ]

    const newQuestionAnswers = [
      { questionKey: 'upperType', answerKey: 'leather' }
    ]
    expect(mapOldToNew(oldQuestionAnswers)).toStrictEqual(newQuestionAnswers)
  })
  test('Mapping two old questionAnswer to two new questionAnswer', () => {
    const oldQuestionAnswers = [
      { questionKey: 'upperType', answerKey: 'leather' },
      { questionKey: 'process', answerKey: 'moccasins' }
    ]

    const newQuestionAnswers = [
      { questionKey: 'upperType', answerKey: 'leather' },
      { questionKey: 'process', answerKey: 'moccasins' }
    ]
    expect(mapOldToNew(oldQuestionAnswers)).toStrictEqual(newQuestionAnswers)
  })
  test('Mapping one old questionAnswer to one new questionAnswer with a different namme', () => {
    const oldQuestionAnswers = [{ questionKey: 'genderType', answerKey: 'man' }]

    const newQuestionAnswers = [{ questionKey: 'gender', answerKey: 'man' }]
    expect(mapOldToNew(oldQuestionAnswers)).toStrictEqual(newQuestionAnswers)
  })
  test('Mapping an old question with a multiquestion', () => {
    const oldQuestionAnswers = [{ questionKey: 'slippers', answerKey: 'no' }]

    const newQuestionAnswers = [{ questionKey: 'slippers', answerKey: 'no' }]
    expect(mapOldToNew(oldQuestionAnswers)).toStrictEqual(newQuestionAnswers)
  })
  test('Mapping an old question with a multiquestion', () => {
    const oldQuestionAnswers = [
      { questionKey: 'winterSports', answerKey: 'no' }
    ]

    const newQuestionAnswers = [
      { questionKey: 'winterSports', answerKey: 'no' }
    ]

    expect(mapOldToNew(oldQuestionAnswers)).toStrictEqual(newQuestionAnswers)
  })
  test('sandal matches vamp', () => {
    const newQuestionAnswers = [{ questionKey: 'vamp', answerKey: 'no' }]

    const oldQuestionAnswers = [{ questionKey: 'sandal', answerKey: 'no' }]
    expect(mapOldToNew(newQuestionAnswers)).toStrictEqual(oldQuestionAnswers)
  })
  test('Check if all answers are yes if they are "pressed"', () => {
    const oldQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'slippers', answerKey: 'yes' },
      { questionKey: 'waterProof', answerKey: 'yes' },
      { questionKey: 'toeCap', answerKey: 'yes' },
      { questionKey: 'winterSports', answerKey: 'yes' }
    ]

    const newQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'slippers', answerKey: 'yes' },
      { questionKey: 'waterProof', answerKey: 'yes' },
      { questionKey: 'toeCap', answerKey: 'yes' },
      { questionKey: 'winterSports', answerKey: 'yes' }
    ]
    expect(mapOldToNew(oldQuestionAnswers)).toStrictEqual(newQuestionAnswers)
  })
  test('Check if all answers are no if they are not "pressed"', () => {
    const oldQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'waterProof', answerKey: 'no' },
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' }
    ]

    const newQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'waterProof', answerKey: 'no' },
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' }
    ]
    expect(mapOldToNew(oldQuestionAnswers)).toStrictEqual(newQuestionAnswers)
  })
  test('Check if answers are yes or no depending on if they are "pressed"', () => {
    const oldQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'yes' },
      { questionKey: 'waterProof', answerKey: 'no' },
      { questionKey: 'toeCap', answerKey: 'yes' },
      { questionKey: 'winterSports', answerKey: 'no' }
    ]

    const newQuestionAnswers = [
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'yes' },
      { questionKey: 'waterProof', answerKey: 'no' },
      { questionKey: 'toeCap', answerKey: 'yes' },
      { questionKey: 'winterSports', answerKey: 'no' }
    ]
    expect(mapOldToNew(oldQuestionAnswers)).toStrictEqual(newQuestionAnswers)
  })
})

describe('Abstraction logic test', () => {
  test('Answering footwear will give you the question upperType', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'country', answerKey: 'eu' },
        { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
      ]
    }

    result = {
      question: getNewQuestion('upperType'),
      code: '',
      partial: true
    }
    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('Answering upperType will give you the question sole', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'country', answerKey: 'eu' },
        { questionKey: 'footwearOrComponents', answerKey: 'footwear' },
        { questionKey: 'upperType', answerKey: 'leather' }
      ]
    }

    result = {
      question: getNewQuestion('sole'),
      code: '',
      partial: true
    }

    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('Answering alot of questions will give you a result', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'country', answerKey: 'eu' },
        { questionKey: 'footwearOrComponents', answerKey: 'footwear' },
        { questionKey: 'upperType', answerKey: 'rubber' },
        { questionKey: 'sole', answerKey: 'rubber' },

        { questionKey: 'process', answerKey: 'moccasins' },
        { questionKey: 'leatherStraps', answerKey: 'no' },
        { questionKey: 'shaft', answerKey: 'other' },
        { questionKey: 'waterProof', answerKey: 'yes' },
        { questionKey: 'sports', answerKey: 'no' },
        { questionKey: 'slippers', answerKey: 'no' },
        { questionKey: 'toeCap', answerKey: 'yes' },
        { questionKey: 'winterSports', answerKey: 'no' },
        { questionKey: 'winterSports', answerKey: 'no' },

        { questionKey: 'genderType', answerKey: 'man' },
        { questionKey: 'lengthOfInsole', answerKey: 'yes' },
        { questionKey: 'madeOnBase', answerKey: 'yes' },
        { questionKey: 'handmade', answerKey: 'yes' }
      ]
    }

    result = {
      code: '6401100000',
      partial: false
    }

    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('Answering alot of questions with new-question names will give you a result', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'country', answerKey: 'eu' },
        { questionKey: 'footwearOrComponents', answerKey: 'footwear' },
        { questionKey: 'upperType', answerKey: 'leather' },
        { questionKey: 'sole', answerKey: 'leather' },
        // { questionKey: 'waterProof', answerKey: 'yes' },
        // { questionKey: 'winterSports', answerKey: 'no' },
        { questionKey: 'leatherStraps', answerKey: 'no' },
        { questionKey: 'shaft', answerKey: 'knee' },
        { questionKey: 'kidsShoe', answerKey: 'no' }
        // { questionKey: 'gender', answerKey: 'man' }
        // { questionKey: 'madeOnBase', answerKey: 'yes' },
        // { questionKey: 'handmade', answerKey: 'yes' },
      ]
    }

    result = {
      code: '6403511100',
      partial: false
    }
    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('Get a part of a code and a question', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'country', answerKey: 'eu' },
        { questionKey: 'footwearOrComponents', answerKey: 'footwear' },
        { questionKey: 'upperType', answerKey: 'leather' },
        { questionKey: 'sole', answerKey: 'leather' },
        { questionKey: 'leatherStraps', answerKey: 'no' },
        { questionKey: 'shaft', answerKey: 'other' },
        { questionKey: 'madeOnBase', answerKey: 'no' },
        { questionKey: 'sandal', answerKey: 'yes' }
      ]
    }

    result = {
      question: getNewQuestion('heightOfSoleAndHeel'),
      code: '640359',
      partial: true
    }
    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('Answering country will give you the question  footwearOrComponents', () => {
    let inputData, result
    inputData = {
      questionAnswers: [{ questionKey: 'country', answerKey: 'eu' }]
    }

    result = {
      question: getNewQuestion('footwearOrComponents'),
      code: '',
      partial: true
    }
    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('Answering country will give you the oldQuestion  footwearOrComponents', () => {
    let inputData, result
    inputData = {
      questionAnswers: [{ questionKey: 'country', answerKey: 'eu' }]
    }

    result = {
      question: getQuestion('footwearOrComponents'),
      code: '',
      partial: true
    }
    expect(calculator(inputData)).toStrictEqual(result)
  })
  test('If the input is empty you shall get the first question', () => {
    let inputData, result
    inputData = {
      questionAnswers: []
    }

    result = {
      question: getNewQuestion('country'),
      code: '',
      partial: true
    }
    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('If the input is empty you shall get the first question', () => {
    let inputData, result
    inputData = {
      questionAnswers: []
    }

    result = {
      question: getQuestion('country'),
      code: '',
      partial: true
    }
    expect(calculator(inputData)).toStrictEqual(result)
  })
  test('Input matches a specific number (6401100000)', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'country', answerKey: 'eu' },
        { questionKey: 'footwearOrComponents', answerKey: 'footwear' },
        { questionKey: 'upperType', answerKey: 'rubber' },
        { questionKey: 'sole', answerKey: 'rubber' },
        { questionKey: 'process', answerKey: 'moccasins' },

        { questionKey: 'waterProof', answerKey: 'yes' },
        { questionKey: 'sports', answerKey: 'no' },
        { questionKey: 'slippers', answerKey: 'yes' },
        { questionKey: 'toeCap', answerKey: 'no' },
        { questionKey: 'winterSports', answerKey: 'no' }
      ]
    }

    result = {
      code: '6401100000',
      partial: false
    }
    expect(calculator(inputData)).toStrictEqual(result)
  })

  test.only('Input matches a specific number (6401100000)', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'country', answerKey: 'eu' },
        { questionKey: 'footwearOrComponents', answerKey: 'footwear' },
        { questionKey: 'upperType', answerKey: 'rubber' },
        { questionKey: 'sole', answerKey: 'rubber' },
        { questionKey: 'process', answerKey: 'moccasins' },
        { questionKey: 'waterProof', answerKey: 'yes' },
        { questionKey: 'sports', answerKey: 'no' },
        { questionKey: 'slippers', answerKey: 'yes' },
        { questionKey: 'toeCap', answerKey: 'no' },
        { questionKey: 'winterSports', answerKey: 'no' }
      ]
    }

    result = {
      code: '6401100000',
      partial: false
    }
    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
})
