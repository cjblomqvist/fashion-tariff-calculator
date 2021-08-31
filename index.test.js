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
      { questionKey: "upperStrapsOrThongs", answerKey: "upperStraps" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
      { questionKey: "upperStrapsOrThongs", answerKey: "thongs" },
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
