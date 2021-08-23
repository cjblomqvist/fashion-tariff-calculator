const questions = [
  {
    id: 1,
    title: "Material",
    question: "What main material is your shoe made of?",
    type: "multipleChoice",
    answers: ["Leather", "Rubber", "Wood"],
  },
  {
    id: 5,
    title: "Sole material",
    question: "What material is the sole made of?",
    type: "multipleChoice",
    answers: ["Leather", "Rubber", "Wood", "Metal"],
  },
];

export function calculator(inputData) {
  if (!inputData.answers) {
    return {
      question: questions[0],
      code: "",
      partial: true,
    };
  } else
    return {
      question: questions[1],
      code: "6401",
      partial: true,
    };
}
