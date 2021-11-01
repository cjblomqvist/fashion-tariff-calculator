import taricFootwear from './taric-footwear.js'
import { footwear } from '../questions/footwear.js'
import { createResult, getQuestion } from '../lib/helpers.js'

const calculator = calculatorFactory({ questions: 'simple' })

test.each([
  // 6401
  ['640110', [], '6401100000'],
  ['640192', [{ upperType: 'rubber' }], '6401921000'],
  ['640192', [{ upperType: 'plastic' }], '6401929000'],
  ['640199', [{ shaft: 'knee' }], '6401990010'],
  ['640199', [{ shaft: 'other' }], '6401990090'],

  // 6402
  ['640212', [{ skiBoots: 'skiBoots' }], '6402121000'],
  ['640212', [{ skiBoots: 'snowboardBoots' }], '6402129000'],
  ['640219', [], '6402190000'],
  ['640220', [], '6402200000'],
  ['640291', [{ toeCap: 'yes' }], '6402911000'],
  ['640291', [{ toeCap: 'no' }], '6402919000'],
  // 640299
  ['640299', [{ toeCap: 'yes' }], '6402990500'],
  ['640299', [{ toeCap: 'no' }, { upperType: 'rubber' }], '6402991000'],
  [
    '640299',
    [{ toeCap: 'no' }, { upperType: 'plastic' }],
    { code: '640299', questionKey: 'slippers' }
  ],
  [
    '640299',
    [{ toeCap: 'no' }, { upperType: 'plastic' }, { slippers: 'yes' }],
    '6402995000'
  ],
  [
    '640299',
    [{ toeCap: 'no' }, { upperType: 'plastic' }, { slippers: 'no' }],
    { code: '640299', questionKey: 'vamp' }
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'yes' }
    ],
    { code: '640299', questionKey: 'heightOfSoleAndHeel' }
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'yes' }
    ],
    '6402993100'
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' }
    ],
    '6402993900'
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' }
    ],
    { code: '640299', questionKey: 'lengthOfInsole' }
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'no' }
    ],
    '6402999100'
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'yes' }
    ],
    { code: '640299', questionKey: 'genderType' }
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6402999600'
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6402999800'
  ],
  [
    '640299',
    [
      { toeCap: 'no' },
      { upperType: 'plastic' },
      { slippers: 'no' },
      { vamp: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'other' }
    ],
    '6402999300'
  ],
  // 6403
  ['640320', [], '6403200000'],
  ['640340', [], '6403400000'],
  [
    '640351',
    [{ shaft: 'ankle' }],
    { code: '640351', questionKey: 'madeOnBase' }
  ],
  [
    '640351',
    [{ shaft: 'ankle' }, { madeOnBase: 'yes' }],
    { code: '640351', questionKey: 'handmade' }
  ],
  [
    '640351',
    [{ shaft: 'ankle' }, { madeOnBase: 'yes' }, { handmade: 'yes' }],
    '6403510510'
  ],
  [
    '640351',
    [{ shaft: 'ankle' }, { madeOnBase: 'yes' }, { handmade: 'no' }],
    '6403510590'
  ],
  [
    '640351',
    [{ shaft: 'ankle' }, { madeOnBase: 'no' }],
    { code: '640351', questionKey: 'lengthOfInsole' }
  ],
  [
    '640351',
    [{ shaft: 'ankle' }, { madeOnBase: 'no' }, { lengthOfInsole: 'no' }],
    '6403519100'
  ],
  [
    '640351',
    [{ shaft: 'ankle' }, { madeOnBase: 'no' }, { lengthOfInsole: 'yes' }],
    { code: '640351', questionKey: 'genderType' }
  ],
  [
    '640351',
    [
      { shaft: 'ankle' },
      { madeOnBase: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6403519500'
  ],
  [
    '640351',
    [
      { shaft: 'ankle' },
      { madeOnBase: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6403519900'
  ],
  [
    '640351',
    [
      { shaft: 'ankle' },
      { madeOnBase: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403519900'
  ],
  [
    '640351',
    [{ shaft: 'knee' }],
    { code: '640351', questionKey: 'lengthOfInsole' }
  ],
  ['640351', [{ shaft: 'knee' }, { lengthOfInsole: 'no' }], '6403511100'],
  [
    '640351',
    [{ shaft: 'knee' }, { lengthOfInsole: 'yes' }],
    { code: '640351', questionKey: 'genderType' }
  ],
  [
    '640351',
    [{ shaft: 'knee' }, { lengthOfInsole: 'yes' }, { genderType: 'men' }],
    '6403511500'
  ],
  [
    '640351',
    [{ shaft: 'knee' }, { lengthOfInsole: 'yes' }, { genderType: 'women' }],
    '6403511900'
  ],
  [
    '640351',
    [
      { shaft: 'knee' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403511900'
  ],
  ['640359', [], { code: '640359', questionKey: 'madeOnBase' }],
  [
    '640359',
    [{ madeOnBase: 'yes' }],
    { code: '640359', questionKey: 'handmade' }
  ],
  ['640359', [{ madeOnBase: 'yes' }, { handmade: 'yes' }], '6403590510'],
  ['640359', [{ madeOnBase: 'yes' }, { handmade: 'no' }], '6403590590'],
  ['640359', [{ madeOnBase: 'no' }], { code: '640359', questionKey: 'vamp' }],
  [
    '640359',
    [{ madeOnBase: 'no' }, { vamp: 'yes' }],
    {
      code: '640359',
      questionKey: 'heightOfSoleAndHeel'
    }
  ],
  [
    '640359',
    [{ madeOnBase: 'no' }, { vamp: 'yes' }, { heightOfSoleAndHeel: 'yes' }],
    '6403591100'
  ],
  [
    '640359',
    [{ madeOnBase: 'no' }, { vamp: 'yes' }, { heightOfSoleAndHeel: 'no' }],
    { code: '640359', questionKey: 'lengthOfInsole' }
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'no' }
    ],
    '6403593100'
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'yes' }
    ],
    { code: '640359', questionKey: 'genderType' }
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6403593500'
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6403593900'
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403593900'
  ],
  [
    '640359',
    [{ madeOnBase: 'no' }, { vamp: 'no' }],
    { code: '640359', questionKey: 'slippers' }
  ],
  [
    '640359',
    [{ madeOnBase: 'no' }, { vamp: 'no' }, { slippers: 'yes' }],
    '6403595000'
  ],
  [
    '640359',
    [{ madeOnBase: 'no' }, { vamp: 'no' }, { slippers: 'no' }],
    { code: '640359', questionKey: 'lengthOfInsole' }
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { lengthOfInsole: 'no' }
    ],
    '6403599100'
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { lengthOfInsole: 'yes' }
    ],
    { code: '640359', questionKey: 'genderType' }
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6403599500'
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6403599900'
  ],
  [
    '640359',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403599900'
  ],
  [
    '640391',
    [{ shaft: 'ankle' }],
    { code: '640391', questionKey: 'madeOnBase' }
  ],
  [
    '640391',
    [{ shaft: 'ankle' }, { madeOnBase: 'yes' }],
    { code: '640391', questionKey: 'handmade' }
  ],
  [
    '640391',
    [{ shaft: 'ankle' }, { madeOnBase: 'yes' }, { handmade: 'yes' }],
    '6403910510'
  ],
  [
    '640391',
    [{ shaft: 'ankle' }, { madeOnBase: 'yes' }, { handmade: 'no' }],
    '6403910590'
  ],
  [
    '640391',
    [{ shaft: 'ankle' }, { madeOnBase: 'no' }],
    { code: '640391', questionKey: 'lengthOfInsole' }
  ],
  [
    '640391',
    [{ shaft: 'ankle' }, { madeOnBase: 'no' }, { lengthOfInsole: 'no' }],
    '6403919100'
  ],
  [
    '640391',
    [{ shaft: 'ankle' }, { madeOnBase: 'no' }, { lengthOfInsole: 'yes' }],
    { code: '640391', questionKey: 'genderType' }
  ],
  [
    '640391',
    [
      { shaft: 'ankle' },
      { madeOnBase: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6403919600'
  ],
  [
    '640391',
    [
      { shaft: 'ankle' },
      { madeOnBase: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6403919800'
  ],
  [
    '640391',
    [
      { shaft: 'ankle' },
      { madeOnBase: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403919300'
  ],
  ['640391', [{ shaft: 'knee' }], { code: '640391', questionKey: 'sports' }],
  [
    '640391',
    [{ shaft: 'knee' }, { sports: 'no' }],
    { code: '640391', questionKey: 'lengthOfInsole' }
  ],
  [
    '640391',
    [{ shaft: 'knee' }, { sports: 'yes' }],
    { code: '640391', questionKey: 'lengthOfInsole' }
  ],
  [
    '640391',
    [{ shaft: 'knee' }, { sports: 'no' }, { lengthOfInsole: 'no' }],
    '6403911190'
  ],
  [
    '640391',
    [{ shaft: 'knee' }, { sports: 'yes' }, { lengthOfInsole: 'no' }],
    '6403911110'
  ],
  [
    '640391',
    [{ shaft: 'knee' }, { sports: 'no' }, { lengthOfInsole: 'yes' }],
    { code: '640391', questionKey: 'genderType' }
  ],
  [
    '640391',
    [{ shaft: 'knee' }, { sports: 'yes' }, { lengthOfInsole: 'yes' }],
    { code: '640391', questionKey: 'genderType' }
  ],
  [
    '640391',
    [
      { shaft: 'knee' },
      { sports: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6403911690'
  ],
  [
    '640391',
    [
      { shaft: 'knee' },
      { sports: 'yes' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6403911610'
  ],
  [
    '640391',
    [
      { shaft: 'knee' },
      { sports: 'yes' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6403911810'
  ],
  [
    '640391',
    [
      { shaft: 'knee' },
      { sports: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6403911890'
  ],
  [
    '640391',
    [
      { shaft: 'knee' },
      { sports: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403911390'
  ],
  [
    '640391',
    [
      { shaft: 'knee' },
      { sports: 'yes' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403911310'
  ],
  ['6403xx', [], { code: '6403xx', questionKey: 'madeOnBase' }],
  [
    '6403xx',
    [{ madeOnBase: 'yes' }],
    { code: '640399', questionKey: 'handmade' }
  ],
  ['6403xx', [{ madeOnBase: 'yes' }, { handmade: 'yes' }], '6403990510'],
  ['6403xx', [{ madeOnBase: 'yes' }, { handmade: 'no' }], '6403990590'],
  ['6403xx', [{ madeOnBase: 'no' }], { code: '640399', questionKey: 'vamp' }],
  [
    '6403xx',
    [{ madeOnBase: 'no' }, { vamp: 'yes' }],
    { code: '640399', questionKey: 'heightOfSoleAndHeel' }
  ],
  [
    '6403xx',
    [{ madeOnBase: 'no' }, { vamp: 'yes' }, { heightOfSoleAndHeel: 'yes' }],
    '6403991100'
  ],
  [
    '6403xx',
    [{ madeOnBase: 'no' }, { vamp: 'yes' }, { heightOfSoleAndHeel: 'no' }],
    { code: '640399', questionKey: 'lengthOfInsole' }
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'no' }
    ],
    '6403993100'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'yes' }
    ],
    { code: '640399', questionKey: 'genderType' }
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6403993600'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6403993800'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'yes' },
      { heightOfSoleAndHeel: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403993300'
  ],
  [
    '6403xx',
    [{ madeOnBase: 'no' }, { vamp: 'no' }],
    { code: '640399', questionKey: 'slippers' }
  ],
  [
    '6403xx',
    [{ madeOnBase: 'no' }, { vamp: 'no' }, { slippers: 'yes' }],
    '6403995000'
  ],
  [
    '6403xx',
    [{ madeOnBase: 'no' }, { vamp: 'no' }, { slippers: 'no' }],
    { code: '6403xx', questionKey: 'winterSports' }
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'yes' }
    ],
    { code: '6403xx', questionKey: 'skiBoots' }
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'yes' },
      { skiBoots: 'skiBoots' }
    ],
    '6403120000'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'yes' },
      { skiBoots: 'snowboardBoots' }
    ],
    '6403120000'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'yes' },
      { skiBoots: 'other' }
    ],
    '6403190000'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' }
    ],
    { code: '640399', questionKey: 'sports' }
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'no' }
    ],
    { code: '640399', questionKey: 'lengthOfInsole' }
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'yes' }
    ],
    { code: '640399', questionKey: 'lengthOfInsole' }
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'no' },
      { lengthOfInsole: 'no' }
    ],
    '6403999190'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'yes' },
      { lengthOfInsole: 'no' }
    ],
    '6403999110'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'no' },
      { lengthOfInsole: 'yes' }
    ],
    { code: '640399', questionKey: 'genderType' }
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'yes' },
      { lengthOfInsole: 'yes' }
    ],
    { code: '640399', questionKey: 'genderType' }
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'yes' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6403999610'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'men' }
    ],
    '6403999690'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'yes' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6403999810'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'women' }
    ],
    '6403999890'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'yes' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403999310'
  ],
  [
    '6403xx',
    [
      { madeOnBase: 'no' },
      { vamp: 'no' },
      { slippers: 'no' },
      { winterSports: 'no' },
      { sports: 'no' },
      { lengthOfInsole: 'yes' },
      { genderType: 'unisex/other' }
    ],
    '6403999390'
  ],
  // 6404
  ['640411', [], '6404110000'],
  ['640419', [], { code: '640419', questionKey: 'slippers' }],
  ['640419', [{ slippers: 'yes' }], '6404191000'],
  ['640419', [{ slippers: 'no' }], '6404199000'],
  ['640420', [], { code: '640420', questionKey: 'slippers' }],
  ['640420', [{ slippers: 'yes' }], '6404201000'],
  ['640420', [{ slippers: 'no' }], '6404209000'],

  // 6405
  ['640510', [], '6405100000'],
  ['640520', [{ sole: 'wood' }], '6405201000'],
  ['640520', [{ sole: 'other' }], { code: '640520', questionKey: 'slippers' }],
  ['640520', [{ sole: 'other' }, { slippers: 'yes' }], '6405209100'],
  ['640520', [{ sole: 'other' }, { slippers: 'no' }], '6405209900'],
  ['640590', [{ sole: 'other' }], '6405909000'],
  ['640590', [{ sole: 'leather' }], '6405901000'],
  ['640590', [{ sole: 'imitationLeather' }], '6405901000']
])('TBD', (hsCode, questionAnswersSimpleFormat, resultData) => {
  let questionAnswers = []

  Object.entries(questionAnswersSimpleFormat).forEach(([questionKey, val]) => {
    const qas = Object.keys(val)
      .map((e) => ({
        questionKey: e,
        answerKey: val[e]
      }))
      .flat()
    questionAnswers.push.apply(questionAnswers, qas)
  })
  const inputData = {
    questionAnswers: [...questionAnswers]
  }
  const resultCode = resultData.code || resultData
  const question = resultData.questionKey
    ? getQuestion(resultData.questionKey, footwear)
    : null
  const result = createResult(resultCode, question)
  expect(taricFootwear(inputData, hsCode)).toStrictEqual(result)
})
