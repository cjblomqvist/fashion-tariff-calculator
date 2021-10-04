export const footwearNew = [
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
    title: 'Are you importing footwear or footwear components',
    text: '',
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
  },
  {
    key: 'upperType',
    title: 'What is the upper made of',
    text: '',
    type: 'single',
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
  },
  {
    key: 'sole',
    title: 'What is the sole made of',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'leather',
        text: 'Leather'
      },
      {
        key: 'imitationLeather',
        text: 'ImitationLeather'
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
        key: 'wood',
        text: 'Wood or cork'
      },
      {
        key: 'other',
        text: 'Other'
      }
    ]
  },
  {
    key: 'qualities',
    title: 'What are the qualities of your shoe',
    text: '',
    type: 'multi',
    subQuestions: [
      {
        key: 'sports',
        title: 'Sports footwear',
        answers: [
          {
            key: 'yes',
            text: 'Yes'
          },
          {
            key: 'no',
            text: 'No'
          }
        ]
      },
      {
        key: 'slippers',
        title: 'Slippers',
        answer: [
          {
            key: 'yes',
            text: 'Yes'
          },
          {
            key: 'no',
            text: 'No'
          }
        ]
      },
      {
        key: 'waterProof',
        title: 'Water Proof',
        answer: [
          {
            key: 'yes',
            text: 'Yes'
          },
          {
            key: 'no',
            text: 'No'
          }
        ]
      },
      {
        key: 'toeCap',
        title: 'Metal Toe Cap',
        answer: [
          {
            key: 'yes',
            text: 'Yes'
          },
          {
            key: 'no',
            text: 'No'
          }
        ]
      },
      {
        key: 'winterSports',
        title: 'Winter Sports',
        answer: [
          {
            key: 'yes',
            text: 'Yes'
          },
          {
            key: 'no',
            text: 'No'
          }
        ]
      }
    ]
  },
  {
    key: 'skiBoots',
    title: 'What kind of winter sports footwear is it',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'skiBoots',
        text: 'Ski Boots'
      },
      {
        key: 'snowboardBoots',
        text: 'Snowboard Boots'
      },
      {
        key: 'other',
        text: 'Other'
      }
    ]
  },
  {
    key: 'process',
    title: 'Which process is use',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'moccasins',
        text: 'Moccasins'
      },
      {
        key: 'stichDown',
        text: 'Stich down and related'
      },
      {
        key: 'goodyear',
        text: 'Goodyear welted'
      },
      {
        key: 'stichTurn',
        text: 'Stich and turn'
      },
      {
        key: 'pegged',
        text: 'Pegged'
      },

      {
        key: 'opanka',
        text: 'Opanka'
      },
      {
        key: 'norwegian',
        text: 'Norwegian'
      },
      {
        key: 'bologna',
        text: 'Bologna(sacchetto)'
      },
      {
        key: 'blake',
        text: 'Blake and blake rapid'
      },
      {
        key: 'vulcanization',
        text: 'Vulcanization'
      },
      {
        key: 'direct injection process',
        text: 'Direct injection process'
      },
      {
        key: 'handStitched',
        text: 'Hand stitched'
      }
    ]
  },
  {
    key: 'shaft',
    title: 'What part does the shaft cover',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'knee',
        text: 'Knee'
      },
      {
        key: 'ankle',
        text: 'Ankle'
      },
      {
        key: 'other',
        text: 'Other'
      }
    ]
  },
  {
    key: 'sandal',
    title: 'Is the shoe a sandal',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'yes',
        text: 'Yes'
      },
      {
        key: 'no',
        text: 'No'
      }
    ],
    originalQuestionKey: 'vamp'
  },
  {
    key: 'gender',
    title: 'What gender is the shoes for',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'man',
        text: 'Man'
      },
      {
        key: 'woman',
        text: 'Woman'
      },
      {
        key: 'unisex/other',
        text: 'Unisex/Other'
      }
    ],
    originalQuestionKey: 'genderType'
  },
  {
    key: 'kidsShoe',
    title: 'Is it a kids shoe',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'yes',
        text: 'Yes'
      },
      {
        key: 'no',
        text: 'No'
      }
    ],
    originalQuestionKey: 'lengthOfInsole'
  },
  {
    key: 'heightOfSoleAndHeel',
    title: 'Is the height of your sole and heal more then 3cm',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'yes',
        text: 'Yes'
      },
      {
        key: 'no',
        text: 'No'
      }
    ]
  },
  {
    key: 'madeOnBase',
    title:
      'Is the footwear made on a base or plattform made of wood not having an inner sole',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'yes',
        text: 'Yes'
      },
      {
        key: 'no',
        text: 'No'
      }
    ]
  },
  {
    key: 'handmade',
    title: 'Is the footwear handmade',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'yes',
        text: 'Yes'
      },
      {
        key: 'no',
        text: 'No'
      }
    ]
  },
  {
    key: 'leatherStraps',
    title:
      'Does the footwear have a leather straps across the instep and around the big toe',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'yes',
        text: 'Yes'
      },
      {
        key: 'no',
        text: 'No'
      }
    ]
  },
  {
    key: 'upperStrapsOrThongs',
    title:
      'Does the footwear have upper straps or thongs assembled to the sole by the means of plugs',
    text: '',
    type: 'single',
    answers: [
      {
        key: 'yes',
        text: 'Yes'
      },
      {
        key: 'no',
        text: 'No'
      }
    ]
  }
]
