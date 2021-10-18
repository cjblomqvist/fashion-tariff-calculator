import { mapNewToOld } from './mapping.js'

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
