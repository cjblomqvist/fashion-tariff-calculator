import { calculator } from "./index";

test("When no answers exist, then return first question", () => {
  let inputData, result;

  inputData = {
    country: "SE",
    system: "TARIC",
  };

  result = {
    question: {
      id: 1,
      title: "Material",
      question: "What main material is your shoe made of?",
      type: "multipleChoice",
      answers: ["Leather", "Rubber", "Wood"],
    },
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user has answered a question, return next question", () => {
  let inputData, result;

  inputData = {
    country: "SE",
    system: "TARIC",
    answers: [{ questionId: 1, answer: 0 }],
  };

  result = {
    question: {
      id: 5,
      title: "Sole material",
      question: "What material is the sole made of?",
      type: "multipleChoice",
      answers: ["Leather", "Rubber", "Wood", "Metal"],
    },
    code: "6401",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
