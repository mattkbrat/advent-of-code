/**
 * Finds duplicate elements between arrays
 */
const findDuplicates = (arr: string[]) => {
  const duplicates: string[] = [];
  const tested: string[] = [];
  
  for (let i = 0; i < arr.length; i++) {
    const testArr = arr.splice(i, 1);
    const characters = arr[i].split("");

    for (const s of testArr) {
      for (const c of characters) {
        if (duplicates.includes(c) || tested.includes(c)) continue;
        else {
          if (!s.includes(c)) {
            tested.push(c);
            continue;
          }
          duplicates.push(c);
        }
      }
    }
  }

  return duplicates;
};

export default findDuplicates;
