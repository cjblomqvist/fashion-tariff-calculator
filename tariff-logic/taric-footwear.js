import { footwear } from '../questions/footwear.js'
import { createResult, getAnswerKey, getQuestion } from '../lib/helpers.js'

function handleHeightOfSoleAndHeel640299(inputData) {
  const answer = getAnswerKey(inputData, 'heightOfSoleAndHeel')
  if (!answer) {
    return createResult('640299', getQuestion('heightOfSoleAndHeel', footwear))
  }
  if (answer === 'yes') {
    return createResult('6402993100')
  }
  return createResult('6402993900')
}
function handleGenderType640299(inputData) {
  const answer = getAnswerKey(inputData, 'genderType')
  if (!answer) {
    return createResult('640299', getQuestion('genderType', footwear))
  }
  if (answer === 'women') {
    return createResult('6402999800')
  } else if (answer === 'men') {
    return createResult('6402999600')
  }
  return createResult('6402999300')
}
function handleInsoleLength640299(inputData) {
  const answer = getAnswerKey(inputData, 'lengthOfInsole')
  if (!answer) {
    return createResult('640299', getQuestion('lengthOfInsole', footwear))
  }
  if (answer === 'yes') {
    return handleGenderType640299(inputData)
  }
  return createResult('6402999100')
}
function handleVamp640299(inputData) {
  let answer = getAnswerKey(inputData, 'vamp')
  if (!answer) {
    return createResult('640299', getQuestion('vamp', footwear))
  }
  if (answer === 'yes') {
    return handleHeightOfSoleAndHeel640299(inputData)
  }
  return handleInsoleLength640299(inputData)
}
function handleSlippers640299(inputData) {
  let answer = getAnswerKey(inputData, 'slippers')
  if (!answer) {
    return createResult('640299', getQuestion('slippers', footwear))
  }
  if (answer === 'yes') {
    return createResult('6402995000')
  }
  return handleVamp640299(inputData)
}
function handleRubberOrPlastic640299(inputData) {
  let upperAnswer = getAnswerKey(inputData, 'upperType')
  if (upperAnswer === 'rubber') {
    return createResult('6402991000')
  }
  return handleSlippers640299(inputData)
}

function handleSlippers640520(inputData) {
  const answer = getAnswerKey(inputData, 'slippers')
  if (!answer) {
    return createResult('640520', getQuestion('slippers', footwear))
  }
  if (answer === 'yes') {
    return createResult('6405209100')
  }
  return createResult('6405209900')
}
function handmade640351(inputData) {
  const answer = getAnswerKey(inputData, 'handmade')
  if (!answer) {
    return createResult('640351', getQuestion('handmade', footwear))
  }
  if (answer === 'yes') {
    return createResult('6403510510')
  }
  return createResult('6403510590')
}
function handleGenderTypeWithShaftAnkle640351(inputData) {
  const answer = getAnswerKey(inputData, 'genderType')
  if (!answer) {
    return createResult('640351', getQuestion('genderType', footwear))
  }
  if (answer === 'women' || answer === 'unisex/other') {
    return createResult('6403519900')
  }
  return createResult('6403519500')
}
function lengthOfInsoleWithMadeOnBaseFalse640351(inputData) {
  const answer = getAnswerKey(inputData, 'lengthOfInsole')
  if (!answer) {
    return createResult('640351', getQuestion('lengthOfInsole', footwear))
  }
  if (answer === 'yes') {
    return handleGenderTypeWithShaftAnkle640351(inputData)
  }
  return createResult('6403519100')
}
function MadeOnBase640351(inputData) {
  const answer = getAnswerKey(inputData, 'madeOnBase')
  if (!answer) {
    return createResult('640351', getQuestion('madeOnBase', footwear))
  }
  if (answer === 'yes') {
    return handmade640351(inputData)
  }
  return lengthOfInsoleWithMadeOnBaseFalse640351(inputData)
}
function handleGenderTypeWithShaftKnee640351(inputData) {
  const answer = getAnswerKey(inputData, 'genderType')
  if (!answer) {
    return createResult('640351', getQuestion('genderType', footwear))
  }
  if (answer === 'women' || answer === 'unisex/other') {
    return createResult('6403511900')
  }
  return createResult('6403511500')
}
function lengthOfInsoleWithShaftFalse640351(inputData) {
  const answer = getAnswerKey(inputData, 'lengthOfInsole')
  if (!answer) {
    return createResult('640351', getQuestion('lengthOfInsole', footwear))
  }
  if (answer === 'yes') {
    return handleGenderTypeWithShaftKnee640351(inputData)
  }
  return createResult('6403511100')
}

function handmade640359(inputData) {
  const answer = getAnswerKey(inputData, 'handmade')
  if (!answer) {
    return createResult('640359', getQuestion('handmade', footwear))
  }
  if (answer === 'yes') {
    return createResult('6403590510')
  }
  return createResult('6403590590')
}
function handleGenderTypeWithLengthOfInsoleTrue64359(inputData) {
  const answer = getAnswerKey(inputData, 'genderType')
  if (!answer) {
    return createResult('640359', getQuestion('genderType', footwear))
  }
  if (answer === 'women' || answer === 'unisex/other') {
    return createResult('6403593900')
  }
  return createResult('6403593500')
}
function InsoleLengthWithHeightOfSoleFalse640359(inputData) {
  const answer = getAnswerKey(inputData, 'lengthOfInsole')
  if (!answer) {
    return createResult('640359', getQuestion('lengthOfInsole', footwear))
  }
  if (answer === 'yes') {
    return handleGenderTypeWithLengthOfInsoleTrue64359(inputData)
  }
  return createResult('6403593100')
}
function handleHeightOfSoleAndHeel640359(inputData) {
  const answer = getAnswerKey(inputData, 'heightOfSoleAndHeel')
  if (!answer) {
    return createResult('640359', getQuestion('heightOfSoleAndHeel', footwear))
  }
  if (answer === 'yes') {
    return createResult('6403591100')
  }
  return InsoleLengthWithHeightOfSoleFalse640359(inputData)
}
function genderTypeWithLengthOfInsoleTrue6400359(inputData) {
  const answer = getAnswerKey(inputData, 'genderType')
  if (!answer) {
    return createResult('640359', getQuestion('genderType', footwear))
  }
  if (answer === 'women' || answer === 'unisex/other') {
    return createResult('6403599900')
  }
  return createResult('6403599500')
}
function lengthOfInsoleWithSlippersFalse(inputData) {
  const answer = getAnswerKey(inputData, 'lengthOfInsole')
  if (!answer) {
    return createResult('640359', getQuestion('lengthOfInsole', footwear))
  }
  if (answer === 'yes') {
    return genderTypeWithLengthOfInsoleTrue6400359(inputData)
  }
  return createResult('6403599100')
}
function handleSlippers640359(inputData) {
  const answer = getAnswerKey(inputData, 'slippers')
  if (!answer) {
    return createResult('640359', getQuestion('slippers', footwear))
  }
  if (answer === 'yes') {
    return createResult('6403595000')
  }
  return lengthOfInsoleWithSlippersFalse(inputData)
}
function handleVamp640359(inputData) {
  const answer = getAnswerKey(inputData, 'vamp')
  if (!answer) {
    return createResult('640359', getQuestion('vamp', footwear))
  }
  if (answer === 'yes') {
    return handleHeightOfSoleAndHeel640359(inputData)
  }
  return handleSlippers640359(inputData)
}

function handmade640391(inputData) {
  const answer = getAnswerKey(inputData, 'handmade')
  if (!answer) {
    return createResult('640391', getQuestion('handmade', footwear))
  }
  if (answer === 'yes') {
    return createResult('6403910510')
  }
  return createResult('6403910590')
}
function genderType640391(inputData) {
  const answer = getAnswerKey(inputData, 'genderType')
  if (!answer) {
    return createResult('640391', getQuestion('genderType', footwear))
  }
  if (answer === 'women') {
    return createResult('6403919800')
  } else if (answer === 'men') {
    return createResult('6403919600')
  }
  return createResult('6403919300')
}
function lengthOfInsoleWithShaftAnkle640391(inputData) {
  const answer = getAnswerKey(inputData, 'lengthOfInsole')
  if (!answer) {
    return createResult('640391', getQuestion('lengthOfInsole', footwear))
  }
  if (answer === 'yes') {
    return genderType640391(inputData)
  }
  return createResult('6403919100')
}
function MadeOnBase640391(inputData) {
  const answer = getAnswerKey(inputData, 'madeOnBase')
  if (!answer) {
    return createResult('640391', getQuestion('madeOnBase', footwear))
  }
  if (answer === 'yes') {
    return handmade640391(inputData)
  }
  return lengthOfInsoleWithShaftAnkle640391(inputData)
}
function genderType640391WithShaftKnee(inputData) {
  const answer = getAnswerKey(inputData, 'genderType')
  const sportsAnswer = getAnswerKey(inputData, 'sports')
  if (!answer) {
    return createResult('640391', getQuestion('genderType', footwear))
  } else if (answer === 'men') {
    if (sportsAnswer === 'yes') {
      return createResult('6403911610')
    }
    return createResult('6403911690')
  } else if (answer === 'women') {
    if (sportsAnswer === 'yes') {
      return createResult('6403911810')
    }
    return createResult('6403911890')
  } else if (answer === 'unisex/other') {
    if (sportsAnswer === 'yes') {
      return createResult('6403911310')
    }
    return createResult('6403911390')
  }
}

function lengthOfInsoleWithShaftKnee640391(inputData) {
  const answer = getAnswerKey(inputData, 'lengthOfInsole')

  if (!answer) {
    return createResult('640391', getQuestion('lengthOfInsole', footwear))
  }
  if (answer === 'yes') {
    return genderType640391WithShaftKnee(inputData)
  }
  const sportsAnswer = getAnswerKey(inputData, 'sports')
  if (sportsAnswer === 'yes') {
    return createResult('6403911110')
  }
  return createResult('6403911190')
}

function handmade640399(inputData) {
  const answer = getAnswerKey(inputData, 'handmade')
  if (!answer) {
    return createResult('640399', getQuestion('handmade', footwear))
  }
  if (answer === 'yes') {
    return createResult('6403990510')
  }
  return createResult('6403990590')
}
function genderTypeWithTrueVamp640399(inputData) {
  const answer = getAnswerKey(inputData, 'genderType')
  if (!answer) {
    return createResult('640399', getQuestion('genderType', footwear))
  }
  if (answer === 'women') {
    return createResult('6403993800')
  } else if (answer === 'men') {
    return createResult('6403993600')
  }
  return createResult('6403993300')
}
function lengthOfInsoleWithTrueVamp640399(inputData) {
  const answer = getAnswerKey(inputData, 'lengthOfInsole')
  if (!answer) {
    return createResult('640399', getQuestion('lengthOfInsole', footwear))
  }
  if (answer === 'yes') {
    return genderTypeWithTrueVamp640399(inputData)
  }
  return createResult('6403993100')
}
function heightOfSole640399(inputData) {
  const answer = getAnswerKey(inputData, 'heightOfSoleAndHeel')
  if (!answer) {
    return createResult('640399', getQuestion('heightOfSoleAndHeel', footwear))
  }
  if (answer === 'yes') {
    return createResult('6403991100')
  }
  return lengthOfInsoleWithTrueVamp640399(inputData)
}
function skiBoots6403xx(inputData) {
  const answer = getAnswerKey(inputData, 'skiBoots')
  if (!answer) {
    return createResult('6403xx', getQuestion('skiBoots', footwear))
  }
  if (answer === 'snowboardBoots' || answer === 'skiBoots') {
    return createResult('6403120000')
  }
  return createResult('6403190000')
}
function genderTypeWithFalseVamp640399(inputData) {
  const answer = getAnswerKey(inputData, 'genderType')
  const answerSports = getAnswerKey(inputData, 'sports')
  if (!answer) {
    return createResult('640399', getQuestion('genderType', footwear))
  }
  if (answer === 'men') {
    if (answerSports === 'yes') {
      return createResult('6403999610')
    }
    return createResult('6403999690')
  } else if (answer === 'women') {
    if (answerSports === 'yes') {
      return createResult('6403999810')
    }
    return createResult('6403999890')
  }
  if (answerSports === 'yes') {
    return createResult('6403999310')
  }
  return createResult('6403999390')
}
function lengthOfInsoleWithFalseVamp640399(inputData) {
  const answer = getAnswerKey(inputData, 'lengthOfInsole')
  const answerSports = getAnswerKey(inputData, 'sports')
  if (!answer) {
    return createResult('640399', getQuestion('lengthOfInsole', footwear))
  }
  if (answer === 'yes') {
    return genderTypeWithFalseVamp640399(inputData)
  }
  if (answerSports === 'yes') {
    return createResult('6403999110')
  }
  return createResult('6403999190')
}
function sports640399(inputData) {
  const answer = getAnswerKey(inputData, 'sports')
  if (!answer) {
    return createResult('640399', getQuestion('sports', footwear))
  }
  if (answer) {
    return lengthOfInsoleWithFalseVamp640399(inputData)
  }
}
function winterSports6403xx(inputData) {
  const answer = getAnswerKey(inputData, 'winterSports')
  if (!answer) {
    return createResult('6403xx', getQuestion('winterSports', footwear))
  }
  if (answer === 'yes') {
    return skiBoots6403xx(inputData)
  }
  return sports640399(inputData)
}
function slippers640399(inputData) {
  const answer = getAnswerKey(inputData, 'slippers')
  if (!answer) {
    return createResult('640399', getQuestion('slippers', footwear))
  }
  if (answer === 'yes') {
    return createResult('6403995000')
  }
  return winterSports6403xx(inputData)
}
function vampWithFalseMadeOnBase640399(inputData) {
  const answer = getAnswerKey(inputData, 'vamp')
  if (!answer) {
    return createResult('640399', getQuestion('vamp', footwear))
  }
  if (answer === 'yes') {
    return heightOfSole640399(inputData)
  }
  return slippers640399(inputData)
}

export default function taricFootwear(inputData, code) {
  if (code === '640110') {
    return createResult('6401100000')
  }
  if (code === '640192') {
    let answer = getAnswerKey(inputData, 'upperType')
    if (answer === 'rubber') {
      return createResult('6401921000')
    }
    return createResult('6401929000')
  }

  if (code === '640199') {
    let answer = getAnswerKey(inputData, 'shaft')
    if (answer === 'knee') {
      return createResult('6401990010')
    }
    return createResult('6401990090')
  }

  if (code === '640212') {
    let answer = getAnswerKey(inputData, 'skiBoots')
    if (answer === 'skiBoots') {
      return createResult('6402121000')
    }
    return createResult('6402129000')
  }

  if (code === '640219') {
    return createResult('6402190000')
  }

  if (code === '640220') {
    return createResult('6402200000')
  }

  if (code === '640291') {
    let answer = getAnswerKey(inputData, 'toeCap')

    if (!answer) {
      return createResult('640291', getQuestion('toeCap', footwear))
    }
    if (answer === 'yes') {
      return createResult('6402911000')
    }
    return createResult('6402919000')
  }
  if (code === '640299') {
    let answer = getAnswerKey(inputData, 'toeCap')

    if (!answer) {
      return createResult('640299', getQuestion('toeCap', footwear))
    }
    if (answer === 'yes') {
      return createResult('6402990500')
    }
    return handleRubberOrPlastic640299(inputData)
  }
  if (code === '640320') {
    return createResult('6403200000')
  }

  if (code === '640351') {
    const answer = getAnswerKey(inputData, 'shaft')
    if (answer === 'ankle') {
      return MadeOnBase640351(inputData)
    }
    return lengthOfInsoleWithShaftFalse640351(inputData)
  }
  if (code === '640359') {
    const answer = getAnswerKey(inputData, 'madeOnBase')
    if (!answer) {
      return createResult('640359', getQuestion('madeOnBase', footwear))
    }
    if (answer === 'yes') {
      return handmade640359(inputData)
    }
    return handleVamp640359(inputData)
  }

  if (code === '640340') {
    return createResult('6403400000')
  }
  if (code === '640391') {
    const answer = getAnswerKey(inputData, 'shaft')
    if (answer === 'ankle') {
      return MadeOnBase640391(inputData)
    } else {
      const answer = getAnswerKey(inputData, 'sports')
      if (!answer) {
        return createResult('640391', getQuestion('sports', footwear))
      }
      if (answer) {
        return lengthOfInsoleWithShaftKnee640391(inputData)
      }
    }
  }

  if (code === '6403xx') {
    const answer = getAnswerKey(inputData, 'madeOnBase')
    if (!answer) {
      return createResult('6403xx', getQuestion('madeOnBase', footwear))
    }
    if (answer === 'yes') {
      return handmade640399(inputData)
    }
    return vampWithFalseMadeOnBase640399(inputData)
  }

  if (code === '640420') {
    const answer = getAnswerKey(inputData, 'slippers')
    if (!answer) {
      return createResult('640420', getQuestion('slippers', footwear))
    }
    if (answer === 'yes') {
      return createResult('6404201000')
    }
    return createResult('6404209000')
  }
  if (code === '640411') {
    return createResult('6404110000')
  }
  if (code === '640419') {
    const answer = getAnswerKey(inputData, 'slippers')
    if (!answer) {
      return createResult('640419', getQuestion('slippers', footwear))
    }
    if (answer === 'yes') {
      return createResult('6404191000')
    }
    return createResult('6404199000')
  }
  if (code === '640510') {
    return createResult('6405100000')
  }
  if (code === '640520') {
    const soleAnswer = getAnswerKey(inputData, 'sole')
    if (soleAnswer === 'wood') {
      return createResult('6405201000')
    }
    return handleSlippers640520(inputData)
  }
  if (code === '640590') {
    const soleAnswer = getAnswerKey(inputData, 'sole')
    if (soleAnswer !== 'other' && soleAnswer !== 'wood') {
      return createResult('6405901000')
    }
    return createResult('6405909000')
  }
}
