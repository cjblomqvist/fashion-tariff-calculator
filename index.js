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
    title: "sole material",
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
];

export function calculator(inputData) {
  if (!inputData.answers) {
    return {
      question: questions[0],
      code: "",
      partial: true,
    };
  } else {
    if (inputData.answers[0].answer === 0) {
      if (inputData.answers[1]) {
        return {
          question: questions[3],
          code: "",
          partial: true,
        };
      }

      return {
        question: questions[1],
        code: "",
        partial: true,
      };
    } else if (inputData.answers[0].answer === 1) {
      return {
        question: questions[2],
        code: "6406",
        partial: true,
      };
    }
  }
}
