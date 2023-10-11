/**
 * Finds duplicate elements between arrays
 */
const findDuplicates = (arr: string[], minDuplicateCount = 1) => {

  const characters = new Set(arr.map(a => a.split("")).flat())
  const duplicates: string[] = [];


  console.log({characters});

  for (const c of characters ) {
    for (const a of arr) {
      if (a.includes(c)){
        duplicates.push(c);      
      }
    }
  }

  return [...new Set(duplicates.filter(d => duplicates.filter(c => c === d).length > minDuplicateCount))]

};

export default findDuplicates;
