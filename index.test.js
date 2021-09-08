import { calculator } from "./index";
import { createResult, getQuestion } from "./questions/index";

describe("HS (Global)", () => {
  const taricQuestionAnswers = [];

  describe("Footwear", () => {
    const footwearQuestionAnswers = [
      ...taricQuestionAnswers,
      { questionKey: "footwearOrComponents", answerKey: "footwear" },
    ];

    test("footwear", () => {
      let inputData, result;
      inputData = {
        questionAnswers: [...footwearQuestionAnswers],
      };

      result = {
        question: getQuestion("upperType"),
        code: "",
        partial: true,
      };

      expect(calculator(inputData)).toStrictEqual(result);
    });

    describe.each([
      ["leather"],
      ["textile"],
      ["rubber"],
      ["plastic"],
      ["other"],
    ])("Upper Type %s", (upperType) => {
      test("footwear => upperType", () => {
        let inputData, result;

        inputData = {
          questionAnswers: [
            ...footwearQuestionAnswers,
            { questionKey: "upperType", answerKey: upperType },
          ],
        };
        result = {
          question: getQuestion("sole"),
          code: "",
          partial: true,
        };

        expect(calculator(inputData)).toStrictEqual(result);
      });
    });

    describe.each([
      ["leather", "leather", "leatherStraps", "6403"],
      ["leather", "immitationLeather", "toeCap", "6403"],
      ["leather", "rubber", "toeCap", "6403"],
      ["leather", "plastic", "toeCap", "6403"],
      ["leather", "wood", null, "6405100000"], // taric
      ["leather", "other", null, "6405100000"], // taric

      ["textile", "leather", "slippers", "640420"], //taric
      ["textile", "immitationLeather", "slippers", "640420"], // taric
      ["textile", "rubber", "sports", "6404"],
      ["textile", "plastic", "sports", "6404"],
      ["textile", "wood", null, "6405201000"], // taric
      ["textile", "other", "slippers", "640520"], // taric

      ["rubber", "leather", null, "6405901000"], // taric
      ["rubber", "immitationLeather", null, "6405901000"], // taric
      ["rubber", "plastic", "process", ""],
      ["rubber", "rubber", "process", ""],
      ["rubber", "wood", null, "6405901000"], // taric
      ["rubber", "other", null, "6405909000"], // taric

      ["plastic", "leather", "", "6405901000"], // taric
      ["plastic", "immitationLeather", "", "6405901000"], // taric
      ["plastic", "plastic", "process", ""],
      ["plastic", "rubber", "process", ""],
      ["plastic", "wood", null, "6405901000"], // taric
      ["plastic", "other", null, "6405909000"], // taric

      ["other", "leather", null, "6405901000"], //taric
      ["other", "immitationLeather", null, "6405901000"], // taric
      ["other", "rubber", null, "6405901000"], // taric
      ["other", "plastic", null, "6405901000"], // taric
      ["other", "wood", null, "6405901000"], // taric
      ["other", "other", null, "6405909000"], // taric
    ])("%s shoes with %s sole", (upperType, sole, question, code) => {
      test("footwear => upperType => sole ", () => {
        let inputData, result;

        inputData = {
          questionAnswers: [
            ...footwearQuestionAnswers,
            { questionKey: "upperType", answerKey: upperType },
            { questionKey: "sole", answerKey: sole },
          ],
        };
        result = createResult(code, question ? getQuestion(question) : null);

        expect(calculator(inputData)).toStrictEqual(result);
      });
    });

    describe.each([
      ["moccasins", "waterProof", "", ""],
      ["stichDown", "waterProof", "", ""],
      ["doodyear", "waterProof", "", ""],
      ["stichTurn", "waterProof", "", ""],
      ["pegged", "waterProof", "", ""],
      ["opanka", "waterProof", "", ""],
      ["norwegian", "waterProof", "", ""],
      ["bologna", "waterProof", "", ""],
      ["blake", "waterProof", "", ""],
      ["vulcanization", "waterProof", "", ""],
      ["direct injection ", "waterProof", "", ""],
      ["handStiched", "waterProof", ""],
    ])("after process=%s is answered", (process, question, code) => {
      test("footwear => upperType => sole => process", () => {
        let inputData, result;

        inputData = {
          questionAnswers: [
            ...footwearQuestionAnswers,
            { questionKey: "upperType", answerKey: "plastic" },
            { questionKey: "sole", answerKey: "plastic" },
            { questionKey: "process", answerKey: process },
          ],
        };
        result = createResult(code, question ? getQuestion(question) : null);

        expect(calculator(inputData)).toStrictEqual(result);
      });
    });

    describe("process and water proof", () => {
      describe.each([
        ["moccasins", "yes", "toeCap", "6401"],
        ["direct injection process", "yes", "toeCap", "6401"],
        ["handStiched", "yes", "toeCap", "6401"],

        ["stichDown", "yes", "winterSports", "6402"],
        ["goodyear", "yes", "winterSports", "6402"],
        ["stichTurn", "yes", "winterSports", "6402"],
        ["pegged", "yes", "winterSports", "6402"],
        ["opanka", "yes", "winterSports", "6402"],
        ["norwegian", "yes", "winterSports", "6402"],
        ["bologna", "yes", "winterSports", "6402"],
        ["blake", "yes", "winterSports", "6402"],
        ["vulcanization", "yes", "winterSports", "6402"],

        ["moccasins", "no", "winterSports", "6402"],
        ["direct injection process", "no", "winterSports", "6402"],
        ["handStiched", "no", "winterSports", "6402"],

        ["stichDown", "no", "winterSports", "6402"],
        ["goodyear", "no", "winterSports", "6402"],
        ["stichTurn", "no", "winterSports", "6402"],
        ["pegged", "no", "winterSports", "6402"],
        ["opanka", "no", "winterSports", "6402"],
        ["norwegian", "no", "winterSports", "6402"],
        ["bologna", "no", "winterSports", "6402"],
        ["blake", "no", "winterSports", "6402"],
        ["vulcanization", "no", "winterSports", "6402"],
      ])(
        "process %s and waterproof %s",
        (process, waterProof, question, code) => {
          test("waterproof", () => {
            let inputData, result;

            inputData = {
              questionAnswers: [
                ...footwearQuestionAnswers,
                { questionKey: "upperType", answerKey: "plastic" },
                { questionKey: "sole", answerKey: "plastic" },
                { questionKey: "process", answerKey: process },
                { questionKey: "waterProof", answerKey: waterProof },
              ],
            };
            result = createResult(
              code,
              question ? getQuestion(question) : null
            );

            expect(calculator(inputData)).toStrictEqual(result);
          });
        }
      );
    });

    describe("6401", () => {
      describe.each([
        ["yes", null, "6401100000"], //taric
        ["no", "shaft", "6401"],
      ])("water proof yes and toe cap %s ", (toeCap, question, code) => {
        test("process => water proof => toe cap", () => {
          let inputData, result;

          inputData = {
            questionAnswers: [
              ...footwearQuestionAnswers,
              { questionKey: "upperType", answerKey: "plastic" },
              { questionKey: "sole", answerKey: "plastic" },
              { questionKey: "process", answerKey: "moccasins" },
              { questionKey: "waterProof", answerKey: "yes" },
              { questionKey: "toeCap", answerKey: toeCap },
            ],
          };
          result = createResult(code, question ? getQuestion(question) : null);

          expect(calculator(inputData)).toStrictEqual(result);
        });
      });
    });

    describe("6402", () => {
      describe.each([
        ["yes", "skiBoots", "6402"],
        ["no", "upperStrapsOrThongs", "6402"],
      ])("winter sports %s ", (winterSports, question, code) => {
        test("upper type => sole => process => water proof => winter sports", () => {
          let inputData, result;

          inputData = {
            questionAnswers: [
              ...footwearQuestionAnswers,
              { questionKey: "upperType", answerKey: "plastic" },
              { questionKey: "sole", answerKey: "plastic" },
              { questionKey: "process", answerKey: "moccasins" },
              { questionKey: "waterProof", answerKey: "no" },
              { questionKey: "winterSports", answerKey: winterSports },
            ],
          };
          result = createResult(code, question ? getQuestion(question) : null);

          expect(calculator(inputData)).toStrictEqual(result);
        });
      });

      describe.each([
        ["yes", null, "6402200000"], //taric
        ["no", "shaft", "6402"],
      ])(
        "winter sports is no and upperStrapsOrThongs %s ",
        (upperStrapsOrThongs, question, code) => {
          test("upper type => sole => process => water proof => winter sports => upperStrapsOrThongs", () => {
            let inputData, result;

            inputData = {
              questionAnswers: [
                ...footwearQuestionAnswers,
                { questionKey: "upperType", answerKey: "plastic" },
                { questionKey: "sole", answerKey: "plastic" },
                { questionKey: "process", answerKey: "moccasins" },
                { questionKey: "waterProof", answerKey: "no" },
                { questionKey: "winterSports", answerKey: "no" },
                {
                  questionKey: "upperStrapsOrThongs",
                  answerKey: upperStrapsOrThongs,
                },
              ],
            };
            result = createResult(
              code,
              question ? getQuestion(question) : null
            );

            expect(calculator(inputData)).toStrictEqual(result);
          });
        }
      );

      describe.each([
        ["plastic", "ankle", "yes", null, "6402911000"], //taric
        ["plastic", "ankle", "no", null, "6402919000"], //taric
        ["plastic", "knee", "yes", null, "6402990500"], //taric
        ["plastic", "other", "yes", null, "6402990500"], //taric

        ["plastic", "knee", "no", "slippers", "640299"], //taric
        ["plastic", "other", "no", "slippers", "640299"], //taric

        ["rubber", "knee", "no", null, "6402991000"], //taric
        ["rubber", "other", "no", null, "6402991000"], //taric
      ])(
        "upper type= %s and shaft = %s and toe cap = %s ",
        (upperType, shaft, toeCap, question, code) => {
          test("upper type => sole => process => water proof => winter sports => upperStrapsOrThongs => shaft=>toeCap", () => {
            let inputData, result;

            inputData = {
              questionAnswers: [
                ...footwearQuestionAnswers,
                { questionKey: "upperType", answerKey: upperType },
                { questionKey: "sole", answerKey: "plastic" },
                { questionKey: "process", answerKey: "moccasins" },
                { questionKey: "waterProof", answerKey: "no" },
                { questionKey: "winterSports", answerKey: "no" },
                { questionKey: "upperStrapsOrThongs", answerKey: "no" },
                { questionKey: "shaft", answerKey: shaft },
                { questionKey: "toeCap", answerKey: toeCap },
              ],
            };
            result = createResult(
              code,
              question ? getQuestion(question) : null
            );

            expect(calculator(inputData)).toStrictEqual(result);
          });
        }
      );

      describe.each([
        ["yes", null, "6402995000"], //taric
        ["no", "vamp", "640299"], //taric
      ])(
        "toeCap is no upperType is plastic and slippers %s ",
        (slippers, question, code) => {
          test("", () => {
            let inputData, result;

            inputData = {
              questionAnswers: [
                ...footwearQuestionAnswers,
                { questionKey: "upperType", answerKey: "plastic" },
                { questionKey: "sole", answerKey: "plastic" },
                { questionKey: "process", answerKey: "moccasins" },
                { questionKey: "waterProof", answerKey: "no" },
                { questionKey: "winterSports", answerKey: "no" },
                { questionKey: "upperStrapsOrThongs", answerKey: "no" },
                { questionKey: "shaft", answerKey: "knee" },
                { questionKey: "toeCap", answerKey: "no" },
                { questionKey: "slippers", answerKey: slippers },
              ],
            };
            result = createResult(
              code,
              question ? getQuestion(question) : null
            );

            expect(calculator(inputData)).toStrictEqual(result);
          });
        }
      );

      describe.each([
        ["yes", "heightOfSoleAndHeel", "640299"], //taric
        ["no", "lengthOfInsole", "640299"], //taric
      ])(
        "toeCap is no upperType is plastic and slippers no and vamp %s ",
        (vamp, question, code) => {
          test("", () => {
            let inputData, result;

            inputData = {
              questionAnswers: [
                ...footwearQuestionAnswers,
                { questionKey: "upperType", answerKey: "plastic" },
                { questionKey: "sole", answerKey: "plastic" },
                { questionKey: "process", answerKey: "moccasins" },
                { questionKey: "waterProof", answerKey: "no" },
                { questionKey: "winterSports", answerKey: "no" },
                { questionKey: "upperStrapsOrThongs", answerKey: "no" },
                { questionKey: "shaft", answerKey: "knee" },
                { questionKey: "toeCap", answerKey: "no" },
                { questionKey: "slippers", answerKey: "no" },
                { questionKey: "vamp", answerKey: vamp },
              ],
            };
            result = createResult(
              code,
              question ? getQuestion(question) : null
            );

            expect(calculator(inputData)).toStrictEqual(result);
          });
        }
      );

      describe.each([
        ["yes", "genderType", "640299"], //taric
        ["no", null, "6402999100"], //taric
      ])(
        "toeCap is no upperType is plastic and slippers no and vamp is no and length of insole = %s",
        (lengthOfInsole, question, code) => {
          test("", () => {
            let inputData, result;

            inputData = {
              questionAnswers: [
                ...footwearQuestionAnswers,
                { questionKey: "upperType", answerKey: "plastic" },
                { questionKey: "sole", answerKey: "plastic" },
                { questionKey: "process", answerKey: "moccasins" },
                { questionKey: "waterProof", answerKey: "no" },
                { questionKey: "winterSports", answerKey: "no" },
                { questionKey: "upperStrapsOrThongs", answerKey: "no" },
                { questionKey: "shaft", answerKey: "knee" },
                { questionKey: "toeCap", answerKey: "no" },
                { questionKey: "slippers", answerKey: "no" },
                { questionKey: "vamp", answerKey: "no" },
                { questionKey: "lengthOfInsole", answerKey: lengthOfInsole },
              ],
            };
            result = createResult(
              code,
              question ? getQuestion(question) : null
            );

            expect(calculator(inputData)).toStrictEqual(result);
          });
        }
      );
    });

    describe("6403", () => {});
  });
});

describe("TARIC (EU)", () => {
  describe("Footwear (6401-6405)", () => {
    const footwearQuestionAnswers = [
      { questionKey: "footwearOrComponents", answerKey: "footwear" },
    ];

    describe("6402", () => {
      describe.each([
        ["skiBoots", null, "6402121000"], //taric
        ["snowboardBoots", null, "6402129000"], //taric
        ["other", null, "6402190000"], //taric
      ])("winter sports yes and ski boots %s ", (skiBoots, question, code) => {
        test("upper type => sole => process => water proof => winter sports => skiBoots", () => {
          let inputData, result;

          inputData = {
            questionAnswers: [
              ...footwearQuestionAnswers,
              { questionKey: "upperType", answerKey: "plastic" },
              { questionKey: "sole", answerKey: "plastic" },
              { questionKey: "process", answerKey: "moccasins" },
              { questionKey: "waterProof", answerKey: "no" },
              { questionKey: "winterSports", answerKey: "yes" },
              { questionKey: "skiBoots", answerKey: skiBoots },
            ],
          };
          result = createResult(code, question ? getQuestion(question) : null);

          expect(calculator(inputData)).toStrictEqual(result);
        });
      });

      describe.each([
        ["yes", null, "6402993100"], //taric
        ["no", null, "6402993900"], //taric
      ])(
        "toeCap is no upperType is plastic and slippers no and vamp yes and heightOfSoleAndHeel =%s ",
        (heightOfSoleAndHeel, question, code) => {
          test("", () => {
            let inputData, result;

            inputData = {
              questionAnswers: [
                ...footwearQuestionAnswers,
                { questionKey: "upperType", answerKey: "plastic" },
                { questionKey: "sole", answerKey: "plastic" },
                { questionKey: "process", answerKey: "moccasins" },
                { questionKey: "waterProof", answerKey: "no" },
                { questionKey: "winterSports", answerKey: "no" },
                { questionKey: "upperStrapsOrThongs", answerKey: "no" },
                { questionKey: "shaft", answerKey: "knee" },
                { questionKey: "toeCap", answerKey: "no" },
                { questionKey: "slippers", answerKey: "no" },
                { questionKey: "vamp", answerKey: "yes" },
                {
                  questionKey: "heightOfSoleAndHeel",
                  answerKey: heightOfSoleAndHeel,
                },
              ],
            };
            result = createResult(
              code,
              question ? getQuestion(question) : null
            );

            expect(calculator(inputData)).toStrictEqual(result);
          });
        }
      );

      describe.each([
        ["men", null, "6402999600"], //taric
        ["women", null, "6402999800"], //taric
        ["unisex", null, "6402999300"], //taric
      ])(
        "toeCap is no upperType is plastic and slippers no and vamp is no and length of insole is yes and gender is =%s",
        (genderType, question, code) => {
          test("", () => {
            let inputData, result;

            inputData = {
              questionAnswers: [
                ...footwearQuestionAnswers,
                { questionKey: "upperType", answerKey: "plastic" },
                { questionKey: "sole", answerKey: "plastic" },
                { questionKey: "process", answerKey: "moccasins" },
                { questionKey: "waterProof", answerKey: "no" },
                { questionKey: "winterSports", answerKey: "no" },
                { questionKey: "upperStrapsOrThongs", answerKey: "no" },
                { questionKey: "shaft", answerKey: "knee" },
                { questionKey: "toeCap", answerKey: "no" },
                { questionKey: "slippers", answerKey: "no" },
                { questionKey: "vamp", answerKey: "no" },
                { questionKey: "lengthOfInsole", answerKey: "yes" },
                { questionKey: "genderType", answerKey: genderType },
              ],
            };
            result = createResult(
              code,
              question ? getQuestion(question) : null
            );

            expect(calculator(inputData)).toStrictEqual(result);
          });
        }
      );
    });

    describe("6403", () => {
      describe.each([
        ["yes", null, null, "6403200000"], //taric
        ["no", "ankle", "madeOnBase", "640351"], //taric
        ["no", "knee", "lengthOfInsole", "640351"], //taric
        ["no", "other", "madeOnBase", "640359"], //taric
      ])(
        "leather shoes with leather sole, leatherStraps=%s, shaft=%s",
        (leatherStraps, shaft, question, code) => {
          test(" ", () => {
            let inputData, result;

            inputData = {
              questionAnswers: [
                ...footwearQuestionAnswers,
                { questionKey: "upperType", answerKey: "leather" },
                { questionKey: "sole", answerKey: "leather" },
                { questionKey: "leatherStraps", answerKey: leatherStraps },
                { questionKey: "shaft", answerKey: shaft },
              ],
            };
            result = createResult(
              code,
              question ? getQuestion(question) : null
            );

            expect(calculator(inputData)).toStrictEqual(result);
          });
        }
      );
      describe("640352", () => {
        describe.each([
          ["yes", "handmade", "640351"], //taric
          ["no", "lengthOfInsole", "640351"], //taric
        ])(
          "leather shoes with leather sole, leatherStraps is no, shaft is ankle and made on base is =%s",
          (madeOnBase, question, code) => {
            test(" ", () => {
              let inputData, result;

              inputData = {
                questionAnswers: [
                  ...footwearQuestionAnswers,
                  { questionKey: "upperType", answerKey: "leather" },
                  { questionKey: "sole", answerKey: "leather" },
                  { questionKey: "leatherStraps", answerKey: "no" },
                  { questionKey: "shaft", answerKey: "ankle" },
                  { questionKey: "madeOnBase", answerKey: madeOnBase },
                ],
              };
              result = createResult(
                code,
                question ? getQuestion(question) : null
              );

              expect(calculator(inputData)).toStrictEqual(result);
            });
          }
        );

        describe.each([
          ["yes", "handmade", "640351"], //taric
          ["no", "lengthOfInsole", "640351"], //taric
        ])(
          "leather shoes with leather sole, leatherStraps is no, shaft is ankle and made on base is =%s",
          (madeOnBase, question, code) => {
            test(" ", () => {
              let inputData, result;

              inputData = {
                questionAnswers: [
                  ...footwearQuestionAnswers,
                  { questionKey: "upperType", answerKey: "leather" },
                  { questionKey: "sole", answerKey: "leather" },
                  { questionKey: "leatherStraps", answerKey: "no" },
                  { questionKey: "shaft", answerKey: "ankle" },
                  { questionKey: "madeOnBase", answerKey: madeOnBase },
                ],
              };
              result = createResult(
                code,
                question ? getQuestion(question) : null
              );

              expect(calculator(inputData)).toStrictEqual(result);
            });
          }
        );

        describe.each([
          ["yes", null, "6403510510"], //taric
          ["no", null, "6403510590"], //taric
        ])(
          "leather shoes with leather sole, leatherStraps is no, shaft is ankle and made on base is yes and handmade=%s",
          (handmade, question, code) => {
            test(" ", () => {
              let inputData, result;

              inputData = {
                questionAnswers: [
                  ...footwearQuestionAnswers,
                  { questionKey: "upperType", answerKey: "leather" },
                  { questionKey: "sole", answerKey: "leather" },
                  { questionKey: "leatherStraps", answerKey: "no" },
                  { questionKey: "shaft", answerKey: "ankle" },
                  { questionKey: "madeOnBase", answerKey: "yes" },
                  { questionKey: "handmade", answerKey: handmade },
                ],
              };
              result = createResult(
                code,
                question ? getQuestion(question) : null
              );

              expect(calculator(inputData)).toStrictEqual(result);
            });
          }
        );

        describe.each([
          ["yes", "genderType", "640351"], //taric
          ["no", null, "6403519100"], //taric
        ])(
          "leather shoes with leather sole, leatherStraps is no, shaft is ankle and made on base is no and length of insole=%s ",
          (lengthOfInsole, question, code) => {
            test(" ", () => {
              let inputData, result;

              inputData = {
                questionAnswers: [
                  ...footwearQuestionAnswers,
                  { questionKey: "upperType", answerKey: "leather" },
                  { questionKey: "sole", answerKey: "leather" },
                  { questionKey: "leatherStraps", answerKey: "no" },
                  { questionKey: "shaft", answerKey: "ankle" },
                  { questionKey: "madeOnBase", answerKey: "no" },
                  { questionKey: "lengthOfInsole", answerKey: lengthOfInsole },
                ],
              };
              result = createResult(
                code,
                question ? getQuestion(question) : null
              );

              expect(calculator(inputData)).toStrictEqual(result);
            });
          }
        );

        describe.each([
          ["men", null, "6403519500"], //taric
          ["women", null, "6403519900"], //taric
          ["unisex", null, "6403519900"], //taric
        ])(
          "leather shoes with leather sole, leatherStraps is no, shaft is ankle and made on base is no and length of insole is yes and gender=%s ",
          (genderType, question, code) => {
            test(" ", () => {
              let inputData, result;

              inputData = {
                questionAnswers: [
                  ...footwearQuestionAnswers,
                  { questionKey: "upperType", answerKey: "leather" },
                  { questionKey: "sole", answerKey: "leather" },
                  { questionKey: "leatherStraps", answerKey: "no" },
                  { questionKey: "shaft", answerKey: "ankle" },
                  { questionKey: "madeOnBase", answerKey: "no" },
                  { questionKey: "lengthOfInsole", answerKey: "yes" },
                  { questionKey: "genderType", answerKey: genderType },
                ],
              };
              result = createResult(
                code,
                question ? getQuestion(question) : null
              );

              expect(calculator(inputData)).toStrictEqual(result);
            });
          }
        );

        describe.each([
          ["yes", null, "genderType", "640351"], //taric
          ["yes", "men", null, "6403511500"], //taric
          ["yes", "women", null, "6403511900"], //taric
          ["yes", "unisex", null, "6403511900"], //taric
          ["no", null, null, "6403511100"],
        ])(
          "leather shoes with leather sole, leatherStraps is no, shaft is knee length os insole =%s and gendertype=%s",
          (lengthOfInsole, genderType, question, code) => {
            test(" ", () => {
              let inputData, result;

              inputData = {
                questionAnswers: [
                  ...footwearQuestionAnswers,
                  { questionKey: "upperType", answerKey: "leather" },
                  { questionKey: "sole", answerKey: "leather" },
                  { questionKey: "leatherStraps", answerKey: "no" },
                  { questionKey: "shaft", answerKey: "knee" },
                  { questionKey: "lengthOfInsole", answerKey: lengthOfInsole },
                  { questionKey: "genderType", answerKey: genderType },
                ],
              };
              result = createResult(
                code,
                question ? getQuestion(question) : null
              );

              expect(calculator(inputData)).toStrictEqual(result);
            });
          }
        );
      });
      describe("650359", () => {
        describe.each([
          ["yes", null, "handmade", "640359"], //taric
          ["yes", "yes", null, "6403590510"], //taric
          ["yes", "no", null, "6403590590"], //taric
          ["no", null, "vamp", "640359"], //taric
        ])(
          "leather straps = no => shaft = other => made on base =%s => handmade => %s)",
          (madeOnBase, handmade, question, code) => {
            test(" ", () => {
              let inputData, result;

              inputData = {
                questionAnswers: [
                  ...footwearQuestionAnswers,
                  { questionKey: "upperType", answerKey: "leather" },
                  { questionKey: "sole", answerKey: "leather" },
                  { questionKey: "leatherStraps", answerKey: "no" },
                  { questionKey: "shaft", answerKey: "other" },
                  { questionKey: "madeOnBase", answerKey: madeOnBase },
                  { questionKey: "handmade", answerKey: handmade },
                ],
              };
              result = createResult(
                code,
                question ? getQuestion(question) : null
              );

              expect(calculator(inputData)).toStrictEqual(result);
            });
          }
        );

        describe.each([
          ["yes", null, "heightOfSoleAndHeel", "640359"], //taric
          ["yes", "yes", null, "6403591100"], //taric
          ["yes", "no", "lengthOfInsole", "640359"], //taric
          ["no", null, "slippers", "640359"], //taric
        ])(
          "leather straps = no => shaft = other => made on base =no => vamp => %s heightOfSoleAndHeel=>%s)",
          (vamp, heightOfSoleAndHeel, question, code) => {
            test(" ", () => {
              let inputData, result;

              inputData = {
                questionAnswers: [
                  ...footwearQuestionAnswers,
                  { questionKey: "upperType", answerKey: "leather" },
                  { questionKey: "sole", answerKey: "leather" },
                  { questionKey: "leatherStraps", answerKey: "no" },
                  { questionKey: "shaft", answerKey: "other" },
                  { questionKey: "madeOnBase", answerKey: "no" },
                  { questionKey: "vamp", answerKey: vamp },
                  {
                    questionKey: "heightOfSoleAndHeel",
                    answerKey: heightOfSoleAndHeel,
                  },
                ],
              };
              result = createResult(
                code,
                question ? getQuestion(question) : null
              );

              expect(calculator(inputData)).toStrictEqual(result);
            });
          }
        );
      });
    });
    describe("6401", () => {
      describe.each([
        ["rubber", "ankle", null, "6401921000"], //taric
        ["plastic", "ankle", null, "6401929000"], //taric
        ["plastic", "knee", null, "6401990010"], //taric
        ["rubber", "knee", null, "6401990010"], //taric
        ["plastic", "other", null, "6401990090"], //taric
        ["rubber", "other", null, "6401990090"], //taric
      ])("toe cap no and shaft %s  ", (upperType, shaft, question, code) => {
        test("process => water proof => toe cap => shaft", () => {
          let inputData, result;

          inputData = {
            questionAnswers: [
              ...footwearQuestionAnswers,
              { questionKey: "upperType", answerKey: upperType },
              { questionKey: "sole", answerKey: "plastic" },
              { questionKey: "process", answerKey: "moccasins" },
              { questionKey: "waterProof", answerKey: "yes" },
              { questionKey: "toeCap", answerKey: "no" },
              { questionKey: "shaft", answerKey: shaft },
            ],
          };
          result = createResult(code, question ? getQuestion(question) : null);

          expect(calculator(inputData)).toStrictEqual(result);
        });
      });
    });

    describe("6403XX", () => {
      const hs6403xxQuestionAnswers = [
        ...footwearQuestionAnswers,
        { questionKey: "toeCap", answerKey: "no" },
        { questionKey: "shaft", answerKey: "other" },
      ];

      /*       test("Not made on a base and vamp", () => {
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
      }); */
    });
  });

  describe("Footwear Components (6406)", () => {});
});

describe("HTS (USA)", () => {});
