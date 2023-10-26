
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

    if (inclusive) {

      const sMid = e1A[1] === e2A[0]
      // =AND([@E1A0]>=[@E2A0],[@E2A1]>=[@E1A0])
      const leftIncluded0 = e1A[0] >= e2A[0] && e2A[1] >= e1A[0]
      // =AND([@E1A1]<=[@E2A1],[@E1A0]>=[@E2A0])
      const rightIncluded0 = e1A[1] <= e2A[1] && e1A[0] >= e2A[0]
      // =AND([@E2A0]<=[@E1A1],[@E2A1]>=[@E1A1])
      const leftIncluded1 = e2A[0] <= e1A[1] && e2A[1] >= e1A[1]
      // =AND([@E2A1]<=[@E1A1],[@E2A0]>=[@E1A0])
      const rightIncluded1 = e2A[1] <= e1A[1] && e2A[0] >= e1A[0]

      const overlaps = sMid || leftIncluded0 || rightIncluded0 || leftIncluded1 || rightIncluded1

      if (overlaps) {
        const newGroupedGroup = [e1A, e2A] as [Assignment, Assignment]

        pairsThatFullyOverlap.push(newGroupedGroup)
      }

    } else {
      if ((e1A[0] >= e2A[0] && e1A[1] <= e2A[1]) || (e2A[0] >= e1A[0] && e2A[1] <= e1A[1]) ) {
        const newGroupedGroup = [e1A, e2A] as [Assignment, Assignment]
  
        pairsThatFullyOverlap.push(newGroupedGroup)
      }
    }

  }

  return pairsThatFullyOverlap.length;

}

export default fourOne2022;