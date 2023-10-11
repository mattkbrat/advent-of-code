

export const text = (input: string) => {
  const inputHalfLength = input.length / 2;
  const firstHalf = input.slice(0, inputHalfLength);
  const secondHalf = input.slice(inputHalfLength, input.length);
  return [firstHalf, secondHalf]
}