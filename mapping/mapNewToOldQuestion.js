import { getNewQuestion } from "../questions/getNewQuestion";
import { getQuestion } from "../questions/getQuestion";

export function mapNewToOld(newQuestionAnswers) {
  const oldQuestionAnswers = [];

  newQuestionAnswers.forEach(questionAnswer => {
    const newQuestion = getNewQuestion(questionAnswer.questionKey);
    
    if(newQuestion.type === 'multi') {

      const answerKeyList= []
      const oldQuestionKey = questionAnswer.answerKey

      answerKeyList.push(oldQuestionKey)

      for(let i = 0; i < answerKeyList.length; i++){
        oldQuestionAnswers.push({
          answerKey: "yes",
          questionKey: answerKeyList[i]
        })
      }
    } else {
      const oldQuestionKey = newQuestion.originalQuestionKey || newQuestion.key

      const oldQuestion = getQuestion(oldQuestionKey)
      const oldAnswer = oldQuestion.answers.find(answer => answer.key === questionAnswer.answerKey)

      const oldAnswerKey = oldAnswer.key

      oldQuestionAnswers.push({
        answerKey: oldAnswerKey,
        questionKey: oldQuestionKey
      })
    }
  });
  return oldQuestionAnswers
}