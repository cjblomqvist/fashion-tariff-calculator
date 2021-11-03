export const base = [
  {
    key: 'country',
    title: 'Which region are you shipping to:',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'eu',
        text: 'EU'
      },
      {
        key: 'other',
        text: 'Other'
      }
    ]
  },
  {
    key: 'footwearOrComponents',
    title: `What are you importing:`,
    text: ``,
    type: 'single',
    answers: [
      {
        key: 'footwear',
        text: 'Footwear'
      },
      {
        key: 'components',
        text: 'Components'
      }
    ]
  }
]
