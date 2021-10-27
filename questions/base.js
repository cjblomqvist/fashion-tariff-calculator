export const base = [
  {
    key: 'country',
    title: 'What country are you shipping to',
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
    title: `Are you importing footwear or footwear components`,
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
