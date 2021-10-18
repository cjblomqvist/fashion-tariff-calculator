import { getQuestion } from '../lib/getQuestion.js'
import { createResult } from './createResult.js'

test('getQuestion', () => {
  let question, result

  ;(question = {
    key: 'upperType',
    title: `What's the upper of the shoes made of?`,
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
    (result = getQuestion('upperType'))

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
