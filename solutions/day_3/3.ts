import findDuplicates from "../../utils/findDuplicates.ts";
import { text } from "../../utils/splitIntoGroups.ts";

export const solutionThree = (input: string[]) => {

  let scoreSum = 0;

  for (const line of input) {
    const split = text(line);

    const duplicates = findDuplicates(split);

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