import hsFootwear from './lib/hs-footwear'
import taricFootwear from './lib/taric-footwear'

export function calculatorNew(inputData) {
  return hsFootwear(inputData, taricFootwear)
}

//inputData är en lsita med QuestionAnswer

//Skapa en lista med questionAnswers som läggs till varje gång man svara på en fråga
//När alla frågor har blivit besvarade eller under tiden de besvaras så ska de kollas av mha calculatorNew för att se om det blir en final code
