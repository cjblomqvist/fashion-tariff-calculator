import taricFootwear from './taric-footwear.js'

import { calculatorFactory } from '../lib/calculator.js'
import { footwear } from '../questions/footwear.js'
import { createResult, getQuestion } from '../lib/helpers.js'

const calculator = calculatorFactory({ questions: 'simple' })

const footwearQuestionAnswers = [
  { questionKey: 'country', answerKey: 'eu' },
  { questionKey: 'footwearOrComponents', answerKey: 'footwear' }
]

test.each([
  // 6401
  ['640110', [], '6401100000'],
  ['640192', [{ questionKey: 'upperType', answerKey: 'rubber' }], '6401921000'],
  [
    '640192',
    [{ questionKey: 'upperType', answerKey: 'plastic' }],
    '6401929000'
  ],
  ['640199', [{ questionKey: 'shaft', answerKey: 'knee' }], '6401990010'],
  ['640199', [{ questionKey: 'shaft', answerKey: 'other' }], '6401990090'],

  // 6402
  [
    '640212',
    [{ questionKey: 'skiBoots', answerKey: 'skiBoots' }],
    '6402121000'
  ],
  [
    '640212',
    [{ questionKey: 'skiBoots', answerKey: 'snowboardBoots' }],
    '6402129000'
  ],
  ['640219', [], '6402190000'],
  ['640220', [], '6402200000'],
  ['640291', [], { code: '640291', questionKey: 'toeCap' }],
  ['640291', [{ questionKey: 'toeCap', answerKey: 'yes' }], '6402911000'],
  ['640291', [{ questionKey: 'toeCap', answerKey: 'no' }], '6402919000'],
  // 640299
  ['640299', [], { code: '640299', questionKey: 'toeCap' }],
  ['640299', [{ questionKey: 'toeCap', answerKey: 'yes' }], '6402990500'],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'rubber' }
    ],
    '6402991000'
  ],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' }
    ],
    { code: '640299', questionKey: 'slippers' }
  ],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'yes' }
    ],
    '6402995000'
  ],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' }
    ],
    { code: '640299', questionKey: 'vamp' }
  ],
  // Vamp = Yes
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' }
    ],
    { code: '640299', questionKey: 'heightOfSoleAndHeel' }
  ],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'yes' }
    ],
    '6402993100'
  ],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' }
    ],
    '6402993900'
  ],
  // Vamp = No
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' }
    ],
    { code: '640299', questionKey: 'lengthOfInsole' }
  ],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6402999100'
  ],
  // LengthOfInsole = Yes
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640299', questionKey: 'genderType' }
  ],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6402999600'
  ],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6402999800'
  ],
  [
    '640299',
    [
      { questionKey: 'toeCap', answerKey: 'no' },
      { questionKey: 'upperType', answerKey: 'plastic' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'other' }
    ],
    '6402999300'
  ],
  // 6403
  //Sole 1 & leatherStraps
  ['640320', [], '6403200000'],
  // Sole !1 & toeCap
  ['640340', [], '6403400000'],
  // Shaft = knee or ankle
  [
    '640351',
    [{ questionKey: 'shaft', answerKey: 'ankle' }],
    { code: '640351', questionKey: 'madeOnBase' }
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'yes' }
    ],
    { code: '640351', questionKey: 'handmade' }
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'yes' },
      { questionKey: 'handmade', answerKey: 'yes' }
    ],
    '6403510510'
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'yes' },
      { questionKey: 'handmade', answerKey: 'no' }
    ],
    '6403510590'
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' }
    ],
    { code: '640351', questionKey: 'lengthOfInsole' }
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403519100'
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640351', questionKey: 'genderType' }
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403519500'
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403519900'
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403519900'
  ],
  [
    '640351',
    [{ questionKey: 'shaft', answerKey: 'knee' }],
    { code: '640351', questionKey: 'lengthOfInsole' }
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403511100'
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640351', questionKey: 'genderType' }
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403511500'
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403511900'
  ],
  [
    '640351',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403511900'
  ],
  // Shaft = other 640359
  ['640359', [], { code: '640359', questionKey: 'madeOnBase' }],
  [
    '640359',
    [{ questionKey: 'madeOnBase', answerKey: 'yes' }],
    { code: '640359', questionKey: 'handmade' }
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'yes' },
      { questionKey: 'handmade', answerKey: 'yes' }
    ],
    '6403590510'
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'yes' },
      { questionKey: 'handmade', answerKey: 'no' }
    ],
    '6403590590'
  ],
  [
    '640359',
    [{ questionKey: 'madeOnBase', answerKey: 'no' }],
    { code: '640359', questionKey: 'vamp' }
  ],
  // Vamp = yes
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' }
    ],
    {
      code: '640359',
      questionKey: 'heightOfSoleAndHeel'
    }
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'yes' }
    ],
    '6403591100'
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' }
    ],
    { code: '640359', questionKey: 'lengthOfInsole' }
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403593100'
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640359', questionKey: 'genderType' }
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403593500'
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403593900'
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403593900'
  ],
  // Vamp = no
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' }
    ],
    { code: '640359', questionKey: 'slippers' }
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'yes' }
    ],
    '6403595000'
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' }
    ],
    { code: '640359', questionKey: 'lengthOfInsole' }
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403599100'
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640359', questionKey: 'genderType' }
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403599500'
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403599900'
  ],
  [
    '640359',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403599900'
  ],
  // Shaft = ankle
  [
    '640391',
    [{ questionKey: 'shaft', answerKey: 'ankle' }],
    { code: '640391', questionKey: 'madeOnBase' }
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'yes' }
    ],
    { code: '640391', questionKey: 'handmade' }
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'yes' },
      { questionKey: 'handmade', answerKey: 'yes' }
    ],
    '6403910510'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'yes' },
      { questionKey: 'handmade', answerKey: 'no' }
    ],
    '6403910590'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' }
    ],
    { code: '640391', questionKey: 'lengthOfInsole' }
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403919100'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640391', questionKey: 'genderType' }
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403919600'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403919800'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'ankle' },
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403919300'
  ],
  // Shaft = knee
  [
    '640391',
    [{ questionKey: 'shaft', answerKey: 'knee' }],
    { code: '640391', questionKey: 'sports' }
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'no' }
    ],
    { code: '640391', questionKey: 'lengthOfInsole' }
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'yes' }
    ],
    { code: '640391', questionKey: 'lengthOfInsole' }
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403911190'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403911110'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640391', questionKey: 'genderType' }
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640391', questionKey: 'genderType' }
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403911690'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403911610'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403911810'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403911890'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403911390'
  ],
  [
    '640391',
    [
      { questionKey: 'shaft', answerKey: 'knee' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403911310'
  ],
  // Shaft = other
  ['6403xx', [], { code: '6403xx', questionKey: 'madeOnBase' }],
  [
    '6403xx',
    [{ questionKey: 'madeOnBase', answerKey: 'yes' }],
    { code: '640399', questionKey: 'handmade' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'yes' },
      { questionKey: 'handmade', answerKey: 'yes' }
    ],
    '6403990510'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'yes' },
      { questionKey: 'handmade', answerKey: 'no' }
    ],
    '6403990590'
  ],
  [
    '6403xx',
    [{ questionKey: 'madeOnBase', answerKey: 'no' }],
    { code: '640399', questionKey: 'vamp' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' }
    ],
    { code: '640399', questionKey: 'heightOfSoleAndHeel' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'yes' }
    ],
    '6403991100'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' }
    ],
    { code: '640399', questionKey: 'lengthOfInsole' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403993100'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640399', questionKey: 'genderType' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403993600'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403993800'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'yes' },
      { questionKey: 'heightOfSoleAndHeel', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403993300'
  ],
  // Vamp = no
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' }
    ],
    { code: '640399', questionKey: 'slippers' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'yes' }
    ],
    '6403995000'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' }
    ],
    { code: '6403xx', questionKey: 'winterSports' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'yes' }
    ],
    { code: '6403xx', questionKey: 'skiBoots' }
  ],
  // winterSports = yes
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'yes' },
      { questionKey: 'skiBoots', answerKey: 'skiBoots' }
    ],
    '6403120000'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'yes' },
      { questionKey: 'skiBoots', answerKey: 'snowboardBoots' }
    ],
    '6403120000'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'yes' },
      { questionKey: 'skiBoots', answerKey: 'other' }
    ],
    '6403190000'
  ],
  // winterSports = no
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' }
    ],
    { code: '640399', questionKey: 'sports' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'no' }
    ],
    { code: '640399', questionKey: 'lengthOfInsole' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'yes' }
    ],
    { code: '640399', questionKey: 'lengthOfInsole' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403999190'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'no' }
    ],
    '6403999110'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640399', questionKey: 'genderType' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' }
    ],
    { code: '640399', questionKey: 'genderType' }
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403999610'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'men' }
    ],
    '6403999690'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403999810'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'women' }
    ],
    '6403999890'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'yes' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403999310'
  ],
  [
    '6403xx',
    [
      { questionKey: 'madeOnBase', answerKey: 'no' },
      { questionKey: 'vamp', answerKey: 'no' },
      { questionKey: 'slippers', answerKey: 'no' },
      { questionKey: 'winterSports', answerKey: 'no' },
      { questionKey: 'sports', answerKey: 'no' },
      { questionKey: 'lengthOfInsole', answerKey: 'yes' },
      { questionKey: 'genderType', answerKey: 'unisex/other' }
    ],
    '6403999390'
  ],
  // 6404
  ['640411', [], '6404110000'],
  ['640419', [], { code: '640419', questionKey: 'slippers' }],
  ['640419', [{ questionKey: 'slippers', answerKey: 'yes' }], '6404191000'],
  ['640419', [{ questionKey: 'slippers', answerKey: 'no' }], '6404199000'],
  ['640420', [], { code: '640420', questionKey: 'slippers' }],
  ['640420', [{ questionKey: 'slippers', answerKey: 'yes' }], '6404201000'],
  ['640420', [{ questionKey: 'slippers', answerKey: 'no' }], '6404209000'],

  // 6405
  ['640510', [], '6405100000'],
  ['640520', [{ questionKey: 'sole', answerKey: 'wood' }], '6405201000'],
  [
    '640520',
    [{ questionKey: 'sole', answerKey: 'other' }],
    { code: '640520', questionKey: 'slippers' }
  ],
  [
    '640520',
    [
      { questionKey: 'sole', answerKey: 'other' },
      { questionKey: 'slippers', answerKey: 'yes' }
    ],
    '6405209100'
  ],
  [
    '640520',
    [
      { questionKey: 'sole', answerKey: 'other' },
      { questionKey: 'slippers', answerKey: 'no' }
    ],
    '6405209900'
  ],
  ['640590', [{ questionKey: 'sole', answerKey: 'other' }], '6405909000'],
  ['640590', [{ questionKey: 'sole', answerKey: 'leather' }], '6405901000'],
  [
    '640590',
    [{ questionKey: 'sole', answerKey: 'imitationLeather' }],
    '6405901000'
  ]
])('TBD', (hsCode, questionAnswers, resultData) => {
  const inputData = {
    questionAnswers
  }

  const resultCode = resultData.code || resultData
  const questionKey = resultData.questionKey
    ? getQuestion(resultData.questionKey, footwear)
    : null

  const result = createResult(resultCode, questionKey)

  expect(taricFootwear(inputData, hsCode)).toStrictEqual(result)
})
