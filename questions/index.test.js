import { createResult, getQuestion } from "./index";

test("getQuestion", () => {
  let question, result;

  (question = {
    key: "upperType",
    title: `What's the upper made of?`,
    text: `Please input a number corresponding to the upper material:
		1. Leather
		2. Textile
		3. Rubber
		4. Plastic
		5. Other`,
    answers: [
      {
        key: "leather",
        text: "Leather",
      },
      {
        key: "textile",
        text: "Textile",
      },
      {
        key: "rubber",
        text: "Rubber",
      },
      {
        key: "plastic",
        text: "Plastic",
      },
      {
        key: "other",
        text: "Other",
      },
    ],
  }),
    (result = getQuestion("upperType"));

  expect(result).toStrictEqual(question);
});

test.only("createresult", () => {
  let obj, result;
  obj = {
    question: "upperType",
    code: "123",
    partial: true,
  };

  result = createResult("123", "upperType");

  expect(result).toStrictEqual(obj);
});
