const questions = [
  {
    id: 1,
    title: "continent",
    question: "Are you importing from EU?",
    type: "boolean",
    answers: ["yes", "no"],
  },
  {
    id: 2,
    title: "upper material",
    question: "What is the upper material?",
    type: "multipleChoice",
    answers: ["leather", "textile", "rubber", "plastic", "other"],
  },
  {
    id: 3,
    title: "part",
    question: "Determine what kind of parts?",
    type: "multipleChoice",
    answers: [
      "uppers and parts thereof, other stiffeners",
      "outer soles and heels",
      "assemblies of uppers affixed to inne soles or to outer soles but without outer outer soles",
      "removable insoles and other removable accesories",
      "outer soles",
      "gaiters, bone leather and similar articles and parts thereof",
    ],
  },
  {
    id: 4,
    title: "sole material",
    question: "what kind of sole is it?",
    type: "multipleChoice",
    answers: [
      "leather",
      "imitation leather",
      "rubber",
      "plastic",
      "wood or cork",
      "other",
    ],
  },

  {
    id: 5,
    title: "process",
    question: "which process you used ?",
    type: "multipleChoice",
    answers: [
      "cementing",
      "moccasins",
      "sticj down and related",
      "goodyesr welted",
      "stich and turn",
      "pegged",
      "opanka",
      "norwegian",
      "bologna(sacchetto)",
      "blake and blake rapid",
      "vulcanization",
      "direct injection process",
      "hand stiched",
    ],
  },
  {
    id: 6,
    title: "waterproof",
    question: "is it water proof?",
    type: "boolean",
    answers: ["yes", "no"],
  },
  {
    id: 7,
    title: "toeCap",
    question: "is material toeCap?",
    type: "boolean",
    answers: ["yes", "no"],
  },
  {
    id: 8,
    title: "shaftHeightType",
    question: "determine how much length the shafts have?",
    type: "multipleChoice",
    answers: [
      "shafts that cover the ankle but not the knee",
      "shafts that cover the knee",
      "other",
    ],
  },
];

export function calculator(inputData) {
  if (!inputData.answers) {
    return {
      question: questions[0],
      code: "",
      partial: true,
    };
  }
  if (inputData.answers[0].answer === 0) {
    if(inputData.answer[1]){

           if (
        (inputData.answers[1].answer === 3 ||
          inputData.answers[1].answer === 4) &&
        (inputData.answers[2].answer === 3 || inputData.answers[2].answer === 4)
      ) {

if (inputData.answers[3]){
  return{
    question: questions[5],
    code: "",
    partial: true,
  }
}


        return {
          question: questions[4],
          code: "",
          partial: true,
        };}

      return{
        question: questions[3],
        code: "",
        partial: true,
      }
    }
    return {
      question: questions[1],
      code: "",
      partial: true,
    };
  }
   
 

if (inputData.answers[3] && inputData.answers[3].answer === 0) {
          if (
            inputData.answers[4] &&
            (inputData.
        answers[4].answer === 1 ||
              inputData.answers[4].answer === 11 ||
              inputData.answers[4].answer === 12)
          ) {
            if (inputData.answers[5] && inputData.answers[5].answer === 0) {
              return {
                code: 64011,
                partial: false,
              };
            } else {
              if (
                inputData.answers[6] &&
                inputData.answers[6].answer === 1 &&
                inputData.answers[1] === 3
              ) {
                return {
                  code: 6401921000,
                  partial: false,
                };
              }
              if (
                inputData.answers[6] &&
                inputData.answers[6].answer === 1 &&
                inputData.answers[1] === 4
              ) {
                return {
                  code: 6401929000,
                  partial: false,
                };
              }
              return {
                question: questions[7],
                code: 6401,
                partial: true,
              };

              return {
                question: questions[6],
                code: 6401,
                partial: true,
              };
            }
           
          }
          return { question: questions[4], code: "", partial: true };
        } else {
        }

        return {
          question: questions[3],
          code: "",
          partial: true,
        };
      }

   
    
  else {
    return {
      question: questions[2],
      code: 6406,
      partial: true,
    };
  }
}
