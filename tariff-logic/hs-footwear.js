import { createResult, getAnswerKey, getQuestion } from '../lib/helpers.js'

export default function hsFootwear(inputData, systemSpecificCallback) {
  if (getAnswerKey(inputData, 'country') === 'eu') {
    const footwearOrComponentsAnswer = getAnswerKey(
      inputData,
      'footwearOrComponents'
    )
    if (!footwearOrComponentsAnswer) {
      return createResult('', getQuestion('footwearOrComponents'))
    }
    if (footwearOrComponentsAnswer === 'footwear') {
      const soleAnswer = getAnswerKey(inputData, 'sole')
      const upperTypeAnswer = getAnswerKey(inputData, 'upperType')
      if (!upperTypeAnswer) {
        return createResult('', getQuestion('upperType'))
      }

      if (!soleAnswer) {
        return createResult('', getQuestion('sole'))
      }

      if (
        (upperTypeAnswer === 'rubber' || upperTypeAnswer === 'plastic') &&
        (soleAnswer === 'plastic' || soleAnswer === 'rubber')
      ) {
        const processAnswer = getAnswerKey(inputData, 'process')
        if (!processAnswer) {
          return createResult('', getQuestion('process'))
        }

        let waterProofAnswer = getAnswerKey(inputData, 'waterProof')
        if (!waterProofAnswer) {
          return createResult('', getQuestion('waterProof'))
        }
        if (
          waterProofAnswer === 'yes' &&
          (processAnswer === 'moccasins' ||
            processAnswer === 'handStitched' ||
            processAnswer === 'direct injection process')
        ) {
          let toeCapAnswer = getAnswerKey(inputData, 'toeCap')

          if (!toeCapAnswer) {
            return createResult('6401', getQuestion('toeCap'))
          }
          if (toeCapAnswer === 'yes') {
            return systemSpecificCallback(inputData, '640110')
          }

          let shaftAnswer = getAnswerKey(inputData, 'shaft')
          if (!shaftAnswer) {
            return createResult('6401', getQuestion('shaft'))
          }
          if (shaftAnswer === 'ankle') {
            return systemSpecificCallback(inputData, '640192')
          }
          return systemSpecificCallback(inputData, '640199')
        }

        let winterSportsAnswer = getAnswerKey(inputData, 'winterSports')
        if (!winterSportsAnswer) {
          return createResult('6402', getQuestion('winterSports'))
        }
        if (winterSportsAnswer === 'yes') {
          let skiBootsAnswer = getAnswerKey(inputData, 'skiBoots')

          if (!skiBootsAnswer) {
            return createResult('6402', getQuestion('skiBoots'))
          }
          if (
            skiBootsAnswer === 'skiBoots' ||
            skiBootsAnswer === 'snowboardBoots'
          ) {
            return systemSpecificCallback(inputData, '640212')
          }
          return systemSpecificCallback(inputData, '640219')
        }
        let strapsAnswer = getAnswerKey(inputData, 'upperStrapsOrThongs')

        if (!strapsAnswer) {
          return createResult('6402', getQuestion('upperStrapsOrThongs'))
        }
        if (strapsAnswer === 'yes') {
          return systemSpecificCallback(inputData, '640220')
        }
        let shaftAnswer = getAnswerKey(inputData, 'shaft')

        if (!shaftAnswer) {
          return createResult('6402', getQuestion('shaft'))
        }
        if (shaftAnswer === 'ankle') {
          return systemSpecificCallback(inputData, '640291')
        }
        return systemSpecificCallback(inputData, '640299')
      }

      if (
        upperTypeAnswer === 'leather' &&
        soleAnswer !== 'wood' &&
        soleAnswer !== 'other'
      ) {
        if (soleAnswer === 'leather') {
          const strapsAnswer = getAnswerKey(inputData, 'leatherStraps')
          if (!strapsAnswer) {
            return createResult('6403', getQuestion('leatherStraps'))
          }
          if (strapsAnswer === 'yes') {
            return systemSpecificCallback(inputData, '640320')
          }
          const shaftAnswer = getAnswerKey(inputData, 'shaft')
          if (!shaftAnswer) {
            return createResult('640351', getQuestion('shaft'))
          }
          if (shaftAnswer === 'ankle' || shaftAnswer === 'knee') {
            return systemSpecificCallback(inputData, '640351')
          }
          return systemSpecificCallback(inputData, '640359')
        }

        const toeCapAnswer = getAnswerKey(inputData, 'toeCap')
        if (!toeCapAnswer) {
          return createResult('6403', getQuestion('toeCap'))
        }
        if (toeCapAnswer === 'yes') {
          return systemSpecificCallback(inputData, '640340')
        }
        const shaftAnswer = getAnswerKey(inputData, 'shaft')
        if (!shaftAnswer) {
          return createResult('6403', getQuestion('shaft'))
        }
        if (shaftAnswer === 'ankle' || shaftAnswer === 'knee') {
          return systemSpecificCallback(inputData, '640391')
        }
        return systemSpecificCallback(inputData, '6403xx')
      }

      if (
        upperTypeAnswer === 'textile' &&
        soleAnswer !== 'other' &&
        soleAnswer !== 'wood'
      ) {
        if (soleAnswer === 'leather' || soleAnswer === 'imitationLeather') {
          return systemSpecificCallback(inputData, '640420')
        } else if (soleAnswer === 'plastic' || soleAnswer === 'rubber') {
          const sportsAnswer = getAnswerKey(inputData, 'sports')
          if (!sportsAnswer) {
            return createResult('6404', getQuestion('sports'))
          }
          if (sportsAnswer === 'yes') {
            return systemSpecificCallback(inputData, '640411')
          }
          return systemSpecificCallback(inputData, '640419')
        }
      }
      if (upperTypeAnswer === 'leather') {
        return systemSpecificCallback(inputData, '640510')
      }

      if (upperTypeAnswer === 'textile') {
        return systemSpecificCallback(inputData, '640520')
      }
      return systemSpecificCallback(inputData, '640590')
    }
  }
  return createResult('', getQuestion('country'))
}
