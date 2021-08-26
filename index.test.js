import { calculator } from "./index";
import { getQuestion } from "./questions/index";

test("When no answers exist, then return first question", () => {
  let inputData, result;

  inputData = {
    euro: "",
  };

  result = {
    question: getQuestion("footwearOrComponents"),
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
    question: getQuestion("part"),
    code: 6406,
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
    question: getQuestion("upperType"),
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user answer question id:2 ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 0 },
    ],
  };
  result = {
    question: getQuestion("sole"),
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user answer question id:4 and upperType=3 or 4 and soleType=3 or 4 ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 4 },
      { questionId: 4, answer: 4 },
    ],
  };
  result = {
    question: getQuestion("process"),
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("when user answer question 5", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 4 },
      { questionId: 4, answer: 4 },
      { questionId: 5, answer: 0 },
    ],
  };
  result = {
    question: getQuestion("waterProof"),
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When waterproof is true and processType is answer: 1 or 11 or 12 ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 4 },
      { questionId: 4, answer: 4 },
      { questionId: 5, answer: 0 },
      { questionId: 6, answer: 1 },
    ],
  };
  result = {
    question: getQuestion("toeCap"),
    code: 6401,
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When metal toEcap is true ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 4 },
      { questionId: 4, answer: 4 },
      { questionId: 5, answer: 0 },
      { questionId: 6, answer: 1 },
      { questionId: 7, answer: 0 },
    ],
  };
  result = {
    code: 64011,
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When metal toEcap is false ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 4 },
      { questionId: 4, answer: 4 },
      { questionId: 5, answer: 0 },
      { questionId: 6, answer: 1 },
      { questionId: 7, answer: 1 },
    ],
  };
  result = {
    question: getQuestion("shaft"),
    code: 6401,
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When shaftHeightTyle is answer:1", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 3 },
      { questionId: 4, answer: 4 },
      { questionId: 5, answer: 0 },
      { questionId: 6, answer: 1 },
      { questionId: 7, answer: 1 },
      { questionId: 8, answer: 1 },
    ],
  };
  result = {
    code: 6401921000,
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When shaftHeightTyle is answer:2", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 3 },
      { questionId: 4, answer: 4 },
      { questionId: 5, answer: 0 },
      { questionId: 6, answer: 1 },
      { questionId: 7, answer: 1 },
      { questionId: 8, answer: 2 },
    ],
  };
  result = {
    code: 6401990010,
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When shaftHeightTyle is answer:3", () => {
  let inputData, result;

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 3 },
      { questionId: 4, answer: 4 },
      { questionId: 5, answer: 0 },
      { questionId: 6, answer: 1 },
      { questionId: 7, answer: 1 },
      { questionId: 8, answer: 3 },
    ],
  };
  result = {
    code: 6401990090,
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
