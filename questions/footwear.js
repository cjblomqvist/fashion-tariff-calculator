export const footwear = [
  {
    key: 'footwearOrComponents',
		title: `Footwear or Footwear Components?`,
		text: `Are you importing footwear or components for footwear to EU input number in the table below
		1, Footwear
		2, Components & Parts of Footwear`,
		answers: [
			{
				key: 'yes',
				text: 'Footwear'
			},
			{
				key: 'no',
				text: 'Components & Parts of Footwear'
			}
		]
  },
	{
    key: 'upperType',
		title: `What's the upper made of?`,
		text: `Please input a number corresponding to the upper material:
		1, Leather
		2, Textile
		3, Rubber
		4, Plastic
		5, Other`,
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
  }
];
