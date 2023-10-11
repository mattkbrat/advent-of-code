const shapes = {
  "Z": 6,
  "Y": 3,
  "X": 0,
  "A": "rock",
  "B": "paper",
  "C": "scissors"
} as const;

type Shapes = typeof shapes;
type ShapesValue = Shapes[keyof Shapes]

const status: {
  [key: string]: {6: string, 3: string, 0: string, base: number}
} = {
  "rock": {
    6: "paper",
    3: "rock",
    0: "scissors",
    base: 1,
  },
  "paper": {
    6: "scissors",
    3: "paper",
    0: "rock",
    base: 2,
  },
  "scissors": {
    6: "rock",
    3: "scissors",
    0: "paper",
    base: 3
  },
}

const cache: {[key: string]: number} = {}

type StatusKey = keyof typeof status;

const getPlayStatus = (opp: StatusKey, move: StatusKey) => {
  const applicableStatus = status[opp];
  const matching = Object.keys(applicableStatus).find(k => +k === move);
  if (!matching) {
    throw new Error("Expecting an object matching move status")
  }  

  // @ts-expect-error unk
  const nextMove = applicableStatus[matching] as ShapesValue;
  const movePoints = status[nextMove].base

  return [Number(move), Number(movePoints ?? 0)];
}

const getPlayScore = (line: string) => {

  if (!line){
    return 0;
  }

  const [one, two] = line.split(" ");

  // @ts-expect-error unk
  const opp = shapes[one] as StatusKey;

  // @ts-expect-error unk
  const move = shapes[two] as StatusKey;

  const [playPoints, shapePoints] = getPlayStatus(opp, move)

  if (Number.isNaN(shapePoints) || Number.isNaN(playPoints) ){
    throw new Error("Expecting numbers for both shape and play points")
  }

  const thesePoints = shapePoints + playPoints

  cache[line] = thesePoints;

  return thesePoints;
}

const solutionTwoPartTwo = (input: string[]) => {
  const finalScore = input.reduce(
    (acc, curr) => {
      const nextScore = cache[curr] 
      ? cache[curr] 
      : getPlayScore(curr)

      const plusAcc = acc += nextScore; 
      // console.log(plusAcc, {nextScore, curr})

      return plusAcc;
    }, 0
    );

  return finalScore;

}

export default solutionTwoPartTwo;