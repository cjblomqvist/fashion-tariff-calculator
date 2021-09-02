import { calculator } from "./index";
import { getQuestion, getQuestionOld } from "./questions/index";

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
    code: "6406",
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

test("When the user answer question sole and upperType=rubber or plastic and soleType= rubber or plastic ", () => {
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

test("when user answer question process", () => {
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

test("When waterproof is true and  processType is answer: Moccasins or direct injection process or handStiched ", () => {
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
    code: "6401",
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
    code: "6401100000",
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
    code: "6401",
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
    code: "6401921000",
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
    code: "6401990010",
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
    code: "6401990090",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When waterproof is false and processType is answer: Moccasins or direct injection process or handStiched ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("winterSports"),
    code: "6402",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When winterSports is yes", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "yes" },
    ],
  };
  result = {
    question: getQuestion("skiBoots"),
    code: "6402",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When user answer skiBoots : skiBoots", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "yes" },
      { questionKey: "skiBoots", answerKey: "skiBoots" },
    ],
  };
  result = {
    code: "6402121000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When user answer skiBoots : snowboardBoots", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "yes" },
      { questionKey: "skiBoots", answerKey: "snowboardBoots" },
    ],
  };
  result = {
    code: "6402129000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When winterSports is no", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("upperStrapsOrThongs"),
    code: "6402",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When upperStrapsOrThongs is true", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "yes" },
    ],
  };
  result = {
    code: "6402200000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When upperStrapsOrThongs is false ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("shaft"),
    code: "6402",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When upperStrapsOrThongs is false and shaft is ankle ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "ankle" },
    ],
  };
  result = {
    question: getQuestion("toeCap"),
    code: "640291",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When upperStrapsOrThongs is false and shaft is ankle and toeCap is yes", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "ankle" },
      { questionKey: "toeCap", answerKey: "yes" },
    ],
  };
  result = {
    code: "6402911000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When upperStrapsOrThongs is false and shaft is ankle and toeCap is no", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "ankle" },
      { questionKey: "toeCap", answerKey: "no" },
    ],
  };
  result = {
    code: "6402919000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When upperStrapsOrThongs is false and shaft is not ankle ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
    ],
  };
  result = {
    question: getQuestion("toeCap"),
    code: "640299",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When upperStrapsOrThongs is false and shaft is not ankle and ToeCap is yes ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "yes" },
    ],
  };
  result = {
    code: "6402990500",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When upperStrapsOrThongs is false and shaft is not ankle and ToeCap is no and upperType is rubber ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "rubber" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
    ],
  };
  result = {
    code: "6402991000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When upperStrapsOrThongs is false and shaft is not ankle and ToeCap is no and upper type is plastic ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("slippers"),
    code: "640299",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When slipper is yes ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "yes" },
    ],
  };
  result = {
    code: "6402995000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When slipper is no ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("vamp"),
    code: "640299",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When vamp is no ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("lengthOfInsole"),
    code: "640299",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When vamp is yes ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
    ],
  };
  result = {
    question: getQuestion("heightOfSoleAndHeel"),
    code: "640299",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When heightOfSoleAndHeel is yes ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
      { questionKey: "heightOfSoleAndHeel", answerKey: "yes" },
    ],
  };
  result = {
    code: "6402993100",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When heightOfSoleAndHeel is no ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
      { questionKey: "heightOfSoleAndHeel", answerKey: "no" },
    ],
  };
  result = {
    code: "6402993900",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When lengthOfInsole is no ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "no" },
    ],
  };
  result = {
    code: "6402999100",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When lengthOfInsole is yes ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
    ],
  };
  result = {
    question: getQuestion("genderType"),
    code: "640299",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When gender is women ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
      { questionKey: "genderType", answerKey: "women" },
    ],
  };
  result = {
    code: "6402999800",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When gender is men ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
      { questionKey: "genderType", answerKey: "men" },
    ],
  };
  result = {
    code: "6402999600",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When gender is unisex ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "plastic" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "process", answerKey: "moccasins" },
      { questionKey: "waterProof", answerKey: "no" },
      { questionKey: "winterSports", answerKey: "no" },
      { questionKey: "upperStrapsOrThongs", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
      { questionKey: "genderType", answerKey: "unisex" },
    ],
  };
  result = {
    code: "6402999300",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user answer question sole and upperType is leather and sole is leather(6403)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
    ],
  };
  result = {
    question: getQuestion("leatherStraps"),
    code: "6403",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When the user answer question sole and upperType is leather and sole is not leather(6403)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "immitationLeather" },
    ],
  };
  result = {
    question: getQuestion("toeCap"),
    code: "6403",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("When the user answer question sole and upperType is textile and sole is leather or immitationLeather", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "immitationLeather" },
    ],
  };
  result = {
    question: getQuestion("slippers"),
    code: "640420",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When the user answer question sole and upperType is textile and sole is leather or textile and slippers is yes", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "immitationLeather" },
      { questionKey: "slippers", answerKey: "yes" },
    ],
  };
  result = {
    code: "6404201000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When the user answer question sole and upperType is textile and sole is leather or textile ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "immitationLeather" },
      { questionKey: "slippers", answerKey: "no" },
    ],
  };
  result = {
    code: "6404209000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When the user answer question sole and upperType is textile and sole is plastic or rubber ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "plastic" },
    ],
  };
  result = {
    question: getQuestion("sports"),
    code: "6404",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When sport is yes", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "sports", answerKey: "yes" },
    ],
  };
  result = {
    code: "6404110000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When sport is no", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "sports", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("slippers"),
    code: "640419",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When sport is no and slippers is yes", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "sports", answerKey: "no" },
      { questionKey: "slippers", answerKey: "yes" },
    ],
  };
  result = {
    code: "6404191000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When sport is no and slippers is no", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "plastic" },
      { questionKey: "sports", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
    ],
  };
  result = {
    code: "6404199000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When uppertype is leather ans sole wood or other", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "wood" },
    ],
  };
  result = {
    code: "6405100000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When uppertype is textile ans sole wood ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "wood" },
    ],
  };
  result = {
    code: "6405201000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When uppertype is textile and sole other ", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "other" },
    ],
  };
  result = {
    question: getQuestion("slippers"),
    code: "640520",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When uppertype is textile ans sole other and slippers yes(640520)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "other" },
      { questionKey: "slippers", answerKey: "yes" },
    ],
  };
  result = {
    code: "6405209100",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("When uppertype is textile ans sole other and slippers no(640520)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "textile" },
      { questionKey: "sole", answerKey: "other" },
      { questionKey: "slippers", answerKey: "no" },
    ],
  };
  result = {
    code: "6405209900",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("sole is not other (640590)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "rubber" },
      { questionKey: "sole", answerKey: "leather" },
    ],
  };
  result = {
    code: "6405901000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("sole is other(640590)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "rubber" },
      { questionKey: "sole", answerKey: "other" },
    ],
  };
  result = {
    code: "6405909000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("leather straps is true(6403)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "yes" },
    ],
  };
  result = {
    code: "6403200000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("leather straps is false(6403)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("shaft"),
    code: "6403",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("leather straps is false and shaft is  ankle(6403)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "ankle" },
    ],
  };
  result = {
    question: getQuestion("madeOnBase"),
    code: "640351",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("leather straps is false and shaft is  knee(6403)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "knee" },
    ],
  };
  result = {
    question: getQuestion("lengthOfInsole"),
    code: "640351",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("leather straps is false and shaft is other(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
    ],
  };
  result = {
    question: getQuestion("madeOnBase"),
    code: "640359",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("leather straps is false and shaft is other and made on base is yes(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "yes" },
    ],
  };
  result = {
    question: getQuestion("handmade"),
    code: "640359",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("leather straps is false and shaft is other and made on base is no(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("vamp"),
    code: "640359",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when  made on base is yes and handmade is yes(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "yes" },
      { questionKey: "handmade", answerKey: "yes" },
    ],
  };
  result = {
    code: "6403590510",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when  made on base is yes and handmade is yes(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "yes" },
      { questionKey: "handmade", answerKey: "no" },
    ],
  };
  result = {
    code: "6403590590",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when made on base is no and vamp is yes (640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
    ],
  };
  result = {
    question: getQuestion("heightOfSoleAndHeel"),
    code: "640359",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when made on base is no and vamp is no (640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("slippers"),
    code: "640359",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});

test("when vamp is yes and heightOfSoleAndHeel is yes(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
      { questionKey: "heightOfSoleAndHeel", answerKey: "yes" },
    ],
  };
  result = {
    code: "6403591100",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when vamp is yes and heightOfSoleAndHeel is no(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
      { questionKey: "heightOfSoleAndHeel", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("lengthOfInsole"),
    code: "640359",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when vamp is yes and heightOfSoleAndHeel is no and lengthOfInsole is false(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
      { questionKey: "heightOfSoleAndHeel", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "no" },
    ],
  };
  result = {
    code: "6403593100",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when vamp is yes and heightOfSoleAndHeel is no and lengthOfInsole is true(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
      { questionKey: "heightOfSoleAndHeel", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
    ],
  };
  result = {
    question: getQuestion("genderType"),
    code: "640359",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when lengthOfInsole is true and gender is women(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
      { questionKey: "heightOfSoleAndHeel", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
      { questionKey: "genderType", answerKey: "women" },
    ],
  };
  result = {
    code: "6403593900",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when lengthOfInsole is true and gender is women(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "yes" },
      { questionKey: "heightOfSoleAndHeel", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
      { questionKey: "genderType", answerKey: "men" },
    ],
  };
  result = {
    code: "6403593500",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when made on base is no and vamp is no and slippers no(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
    ],
  };
  result = {
    question: getQuestion("lengthOfInsole"),
    code: "640359",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when made on base is no and vamp is no and slippers yes(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "slippers", answerKey: "yes" },
    ],
  };
  result = {
    code: "6403595000",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when  vamp is no and slippers no and length of insole is yes(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
    ],
  };
  result = {
    question: getQuestion("genderType"),
    code: "640359",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when  vamp is no and slippers no and length of insole is no(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "no" },
    ],
  };
  result = {
    code: "6403599100",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when  vamp is no and slippers no and length of insole is yes and gender is women(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
      { questionKey: "genderType", answerKey: "women" },
    ],
  };
  result = {
    code: "6403599900",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
test("when  vamp is no and slippers no and length of insole is yes and gender is men(640359)", () => {
  let inputData, result;

  inputData = {
    euro: "",
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "leather" },
      { questionKey: "leatherStraps", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "vamp", answerKey: "no" },
      { questionKey: "slippers", answerKey: "no" },
      { questionKey: "lengthOfInsole", answerKey: "yes" },
      { questionKey: "genderType", answerKey: "men" },
    ],
  };
  result = {
    code: "6403599500",
    partial: false,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
