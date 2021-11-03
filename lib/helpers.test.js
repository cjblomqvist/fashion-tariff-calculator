import { footwear } from '../questions/footwear.js'
import {
  createResult,
  getQuestion,
  mapMergedQuestionAnswersToOriginal
} from './helpers.js'

test('getQuestion', () => {
  let question, result
  ;(question = {
    key: 'upperType',
    title: `What is the upper made of:`,
    text: ``,
    answers: [
      {
        key: 'leather',
        text: 'Leather'
      },
      {
        key: 'textile',
        text: 'Textile'
      },
      {
        key: 'rubber',
        text: 'Rubber'
      },
      {
        key: 'plastic',
        text: 'Plastic'
      },
      {
        key: 'other',
        text: 'Other'
      }
    ]
  }),
    (result = getQuestion('upperType', footwear))

  expect(result).toStrictEqual(question)
})

test('createresult', () => {
  let obj, result
  obj = {
    question: 'upperType',
    code: '123',
    partial: true
  }

  result = createResult('123', 'upperType')

  expect(result).toStrictEqual(obj)
})

describe('Transform merged QuestionAnswers into original QuestionAnswers', () => {
  test('upperType matches upperType', () => {
    const newQuestionAnswers = [
      { questionKey: 'upperType', answerKey: 'leather' }
    ]

    const oldQuestionAnswers = [
      { questionKey: 'upperType', answerKey: 'leather' }
    ]
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
  })

  test('sole matches sole', () => {
    const newQuestionAnswers = [{ questionKey: 'sole', answerKey: 'leather' }]

    const oldQuestionAnswers = [{ questionKey: 'sole', answerKey: 'leather' }]
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
  })

  test('gender matches genderType', () => {
    const newQuestionAnswers = [{ questionKey: 'gender', answerKey: 'man' }]

    const oldQuestionAnswers = [{ questionKey: 'genderType', answerKey: 'man' }]
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
  })

  test('sandal matches vamp', () => {
    const newQuestionAnswers = [{ questionKey: 'sandal', answerKey: 'no' }]

    const oldQuestionAnswers = [{ questionKey: 'vamp', answerKey: 'no' }]
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
  })

  test('skiBoots matches skiBoots', () => {
    const newQuestionAnswers = [{ questionKey: 'skiBoots', answerKey: 'other' }]

    const oldQuestionAnswers = [{ questionKey: 'skiBoots', answerKey: 'other' }]
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
  })

  test('process matches process', () => {
    const newQuestionAnswers = [{ questionKey: 'process', answerKey: 'pegged' }]

    const oldQuestionAnswers = [{ questionKey: 'process', answerKey: 'pegged' }]
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
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
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
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
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
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
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
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
    expect(
      mapMergedQuestionAnswersToOriginal(newQuestionAnswers)
    ).toStrictEqual(oldQuestionAnswers)
  })
})
