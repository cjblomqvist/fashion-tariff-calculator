export function createResult(code, question) {
  if (question) {
    return {
      question,
      code,
      partial: true
    }
  }
  return {
    code,
    partial: false
  }
}
