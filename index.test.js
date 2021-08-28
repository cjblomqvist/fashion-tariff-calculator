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
    questionAnswers: [{ questionKey: "footwearOrComponents", answerKey: "no" }],
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
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
    ],
  };

  result = {
    question: getQuestion("upperType"),
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user answer question upperType", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
    ],
  };
  result = {
    question: getQuestion("sole"),
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user answer question process and upperType=rubber or plastic and soleType= rubber or plastic ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
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
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "Moccasins" },
    ],
  };
  result = {
    question: getQuestion("waterProof"),
    code: "",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When waterproof is true and processType is answer: Moccasins or direct injection process or handStiched ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "yes" },
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
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "yes" },
      { questionKey: "toeCap", answerKey: "yes" },
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
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "yes" },
      { questionKey: "toeCap", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("shaft"),
    code: 6401,
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When shaftHeightTyle is answer:ankle", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "yes" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "shaft", answerKey: "ankle" },
    ],
  };
  result = {
    code: 6401921000,
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When shaftHeightTyle is answer:knee", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "yes" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "shaft", answerKey: "knee" },
    ],
  };
  result = {
    code: 6401990010,
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When shaftHeightTyle is answer:other", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "yes" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
    ],
  };
  result = {
    code: 6401990090,
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
