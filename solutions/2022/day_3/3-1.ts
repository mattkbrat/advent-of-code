import findDuplicates from "../../../utils/findDuplicates.ts";
import { array, text } from "../../../utils/splitIntoGroups.ts";

export const solutionThreePartTwo = (input: string[]) => {

  let scoreSum = 0;

  // Split into groups of three lines

  const groups = array(input, 3)

  console.log(groups);

  for (const group of groups) {

    const duplicates = findDuplicates(group, 2);

    console.log({group, duplicates})

    let score = 0;


    for (const duplicate of duplicates) {
      const charCode = duplicate.charCodeAt(0);
    
      const isLowercase = charCode >= 97; 
      
      // Lowercase item types a through z have priorities 1 through 26.
      // Uppercase item types A through Z have priorities 27 through 52.


      const nextScore = isLowercase ? charCode - 96 : charCode - 38;   
      score += nextScore;
    
    }

    scoreSum += score;

  }

  return scoreSum;

}