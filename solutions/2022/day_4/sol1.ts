
// 2022 day4 part1

type Assignment = [number, number]
type Pair = [Assignment, Assignment]

const fourOne2022 = (content: string[], inclusive = false) => {

  // split the strings by comma then by dash

  const pairsThatFullyOverlap: Pair[] = [];
  
  for (const row of content) {
    const split = row.split(",")
    const numbers = split.map((s) => s.split('-'))

    // elf 1 assignment, elf 2 assignment
    const e1A: Assignment = [+numbers[0][0], +numbers[0][1]]
    const e2A: Assignment = [+numbers[1][0], +numbers[1][1]]

    // we assume that each elf's assignment is already sorted (a-b)

    // assignment one start is greater than assignment 2 start
    const a1SGEA2S = e1A[0] >= e2A[0];
    const a2EGEA1S = e2A[1] >= e1A[0];
    const a1EGEA2E = e1A[1] <= e2A[1];
    const a2EGEA1E = e2A[1] <= e1A[1]
    const sMid = e1A[1] === e2A[0]

    if (inclusive) {

      const leftIncluded0 = a1SGEA2S && a2EGEA1S
      const rightIncluded0 = a1EGEA2E && a1SGEA2S
      const leftIncluded1 = e2A[0] <= e1A[1] && e2A[1] >= e1A[1]
      const rightIncluded1 = a2EGEA1E && !a1SGEA2S

      const overlaps = sMid || leftIncluded0 || rightIncluded0 || leftIncluded1 || rightIncluded1

      if (overlaps) {
        const newGroupedGroup = [e1A, e2A] as [Assignment, Assignment]

        pairsThatFullyOverlap.push(newGroupedGroup)
      }

    } else {
      if ((a1SGEA2S && a1EGEA2E) || (e2A[0] >= e1A[0] && a2EGEA1E) ) {
        const newGroupedGroup = [e1A, e2A] as [Assignment, Assignment]
  
        pairsThatFullyOverlap.push(newGroupedGroup)
      }
    }

  }

  return pairsThatFullyOverlap.length;

}

export default fourOne2022;