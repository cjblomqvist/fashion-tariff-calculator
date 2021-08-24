import { calculator } from "./index";

test("When no answers exist, then return first question", () => {
  let inputData, result;

  inputData = {
    euro: "",
  };

  result = {
    question: {
      id: 1,
      title: "continent",
      question: "Are you importing from EU?",
      type: "boolean",
      answers: ["yes", "no"],
    },
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user has answered No", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [{ questionId: 1, answer: 1 }],
  };

  result = {
    question: {
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
    code: "6406",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user has answered yes", () => {
  let inputData, result;
  inputData = {
    euro: "",
    answers: [{ questionId: 1, answer: 0 }],
  };

  result = {
    question: {
      id: 2,
      title: "sole material",
      question: "What is the upper material?",
      type: "multipleChoice",
      answers: ["leather", "textile", "rubber", "plastic", "other"],
    },
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user answer question id:2 ", () => {
  let inputData, result;
  /*   let upperType; */

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 3 },
    ],
  };
  result = {
    question: {
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
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
