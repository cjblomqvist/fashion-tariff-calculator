import { calculator } from "./index";
import { getQuestion } from "./questions/index";

describe("HS (Global)", () => {
  const taricQuestionAnswers = [];

  describe("Footwear", () => {
    const footwearQuestionAnswers = [
      ...taricQuestionAnswers,
      { questionKey: "footwearOrComponents", answerKey: "footwear" },
    ];

    describe("6403", () => {
      const hs6403xxQuestionAnswers = [
        ...hs6403QuestionAnswers,
        { questionKey: "upperType", answerKey: "leather" },
        { questionKey: "sole", answerKey: "immitationLeather" },
      ];
    });
  });

  describe("Footwear Components", () => {});
});

describe("TARIC (EU)", () => {
  describe("Footwear (6401-6405)", () => {
    const footwearQuestionAnswers = [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "immitationLeather" },
    ];

    describe("6403XX", () => {
      const hs6403xxQuestionAnswers = [
        ...footwearQuestionAnswers,
        { questionKey: "toeCap", answerKey: "no" },
        { questionKey: "shaft", answerKey: "other" },
      ];

      test("Not made on a base and vamp", () => {
        let inputData, result;

        inputData = {
          questionAnswers: [
            ...hs6403xxQuestionAnswers,
            { questionKey: "madeOnBase", answerKey: "no" },
            { questionKey: "vamp", answerKey: "yes" },
          ],
        };
        result = {
          question: getQuestion("heightOfSoleAndHeel"),
          code: "640399",
          partial: true,
        };

        expect(calculator(inputData)).toStrictEqual(result);
      });
    });
  });

  describe("Footwear Components (6406)", () => {});
});

describe("HTS (USA)", () => {});

test.skip("When sole is not leather and toeCap is no and shaft other made on base is no and vamp is yes", () => {
  let inputData, result;

  inputData = {
    questionAnswers: [
      { questionKey: "footwearOrComponents", answerKey: "yes" },
      { questionKey: "upperType", answerKey: "leather" },
      { questionKey: "sole", answerKey: "immitationLeather" },
      { questionKey: "toeCap", answerKey: "no" },
      { questionKey: "shaft", answerKey: "other" },
      { questionKey: "vamp", answerKey: "yes" },
      { questionKey: "madeOnBase", answerKey: "no" },
      { questionKey: "heightOfSoleAndHeel", answerKey: "yes" },
    ],
  };
  result = {
    code: "6403991100",
    partial: true,
  };

  expect(calculator(inputData)).toStrictEqual(result);
});
