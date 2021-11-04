import { calculator as calculatorNew } from './calculator.js'
import { getQuestion } from './helpers.js'

describe('Abstraction logic test', () => {
  test('Answering upperType will give you the question sole', () => {
    let inputData, result
    inputData = {
      questionAnswers: [{ questionKey: 'upperType', answerKey: 'leather' }]
    }

    result = {
      question: getQuestion('sole'),
      code: '',
      partial: true
    }

    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('Answering alot of questions will give you a result', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'upperType', answerKey: 'leather' },
        { questionKey: 'sole', answerKey: 'leather' },
        { questionKey: 'vamp', answerKey: 'yes' },
        { questionKey: 'leatherStraps', answerKey: 'no' },
        { questionKey: 'shaft', answerKey: 'ankle' },
        { questionKey: 'madeOnBase', answerKey: 'no' },
        { questionKey: 'lengthOfInsole', answerKey: 'yes' },
        { questionKey: 'genderType', answerKey: 'man' }
      ]
    }

    result = {
      code: '6403519500',
      partial: false
    }

    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('Answering alot of questions with new-question names will give you a result', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'upperType', answerKey: 'leather' },
        { questionKey: 'sole', answerKey: 'leather' },
        { questionKey: 'leatherStraps', answerKey: 'no' },
        { questionKey: 'shaft', answerKey: 'knee' },
        { questionKey: 'kidsShoe', answerKey: 'no' }
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
        { questionKey: 'upperType', answerKey: 'leather' },
        { questionKey: 'sole', answerKey: 'leather' },
        { questionKey: 'leatherStraps', answerKey: 'no' },
        { questionKey: 'shaft', answerKey: 'other' },
        { questionKey: 'madeOnBase', answerKey: 'no' },
        { questionKey: 'sandal', answerKey: 'yes' }
      ]
    }

    result = {
      question: getQuestion('heightOfSoleAndHeel'),
      code: '640359',
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
      question: getQuestion('upperType'),
      code: '',
      partial: true
    }
    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
  test('Input matches a specific number (6401921000)', () => {
    let inputData, result
    inputData = {
      questionAnswers: [
        { questionKey: 'upperType', answerKey: 'rubber' },
        { questionKey: 'sole', answerKey: 'rubber' },
        { questionKey: 'process', answerKey: 'cementing' },
        { questionKey: 'waterProof', answerKey: 'yes' },
        { questionKey: 'sports', answerKey: 'no' },
        { questionKey: 'slippers', answerKey: 'yes' },
        { questionKey: 'toeCap', answerKey: 'no' },
        { questionKey: 'winterSports', answerKey: 'no' },
        { questionKey: 'shaft', answerKey: 'ankle' }
      ]
    }

    result = {
      code: '6401921000',
      partial: false
    }
    expect(calculatorNew(inputData)).toStrictEqual(result)
  })
})
