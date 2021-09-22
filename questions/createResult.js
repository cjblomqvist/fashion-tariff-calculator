export function createResult(code, question) {
  if (question) {
    return {
      question,
      code,
      //has no use atm because when you dont have a question you get a result
      partial: true,
    };
  }

  return {
    code,
    //has no use atm because when you dont have a question you get a result
    partial: false,
  };
}
