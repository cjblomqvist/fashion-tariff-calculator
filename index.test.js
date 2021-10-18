import { calculator as calculatorNew, calculatorFactory } from './lib/calculator.js'
import { footwear } from './questions/footwear.js'
import { getQuestion } from './lib/helpers.js'

const calculator = calculatorFactory({ questions: 'simple' });

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
      question: getQuestion('upperType'),
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
        { questionKey: 'country', answerKey: 'eu' },
        { questionKey: 'footwearOrComponents', answerKey: 'footwear' },
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
      question: getQuestion('heightOfSoleAndHeel'),
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
      question: getQuestion('footwearOrComponents'),
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
      question: getQuestion('footwearOrComponents', footwear),
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
      question: getQuestion('country'),
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
      question: getQuestion('country', footwear),
      code: '',
      partial: true
    }
    expect(calculator(inputData)).toStrictEqual(result)
  })
  test('Input matches a specific number (6401921000)', () => {
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
