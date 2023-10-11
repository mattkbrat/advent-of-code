

export const text = (input: string) => {
  const inputHalfLength = input.length / 2;
  const firstHalf = input.slice(0, inputHalfLength);
  const secondHalf = input.slice(inputHalfLength, input.length);
  return [firstHalf, secondHalf]
}

export const array = <T>(input: T[], size: number) => {

  const result = [];

  let newArray: T[] = [];

  for (const i of input) {
    if (newArray.length < size) {
      newArray.push(i);
      continue
    }

    result.push(newArray)
    newArray = [i];
  }

  result.push(newArray)
  return result;
}