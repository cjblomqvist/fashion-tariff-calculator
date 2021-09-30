import hsFootwear from './lib/hs-footwear'
import taricFootwear from './lib/taric-footwear'
import htsFootwear from './lib/hts-footwear'

export function calculator(inputData) {
  const isFootwear = true
  let system = ''
  if (inputData.questionAnswers[0].answerKey === 'eu') {
    system = 'TARIC'
  } else {
    system = 'HTS'
  }

  if (isFootwear) {
    if (system === 'TARIC') {
      return hsFootwear(inputData, taricFootwear)
    }

    if (system === 'HTS') {
      return hsFootwear(inputData, htsFootwear)
    }
  }
}
