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
    question: {
      id: 2,
      title: "upper material",
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

  inputData = {
    euro: "",
    answers: [
      { questionId: 1, answer: 0 },
      { questionId: 2, answer: 0 },
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
    question: {
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
    question: {
      id: 6,
      title: "waterproof",
      question: "is it water proof?",
      type: "boolean",
      answers: ["yes", "no"],
    },
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
    question: {
      id: 7,
      title: "toeCap",
      question: "is material toeCap?",
      type: "boolean",
      answers: ["yes", "no"],
    },
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
    code: 6401,
    partial: true,
    question: {
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
