const shapes = {
  "Z": "scissors",
  "Y": "paper",
  "X": "rock",
  "A": "rock",
  "B": "paper",
  "C": "scissors"
} as const;

type Shapes = typeof shapes;
type ShapesValue = Shapes[keyof Shapes]

const status: {
  [key in ShapesValue]: {
    0: ShapesValue // loss
    3: ShapesValue // tie
    6: ShapesValue // win
    base: number
  }
} = {
  "rock": {
    0: "paper",
    3: "rock",
    6: "scissors",
    base: 1,
  },
  "paper": {
    0: "scissors",
    3: "paper",
    6: "rock",
    base: 2,
  },
  "scissors": {
    0: "rock",
    3: "scissors",
    6: "paper",
    base: 3
  },
} as const;

const cache: {[key: string]: number} = {}

type StatusKey = keyof typeof status;

export const getPlayStatus = (opp: StatusKey, play: StatusKey) => {
  const applicableStatus = status[play];

  // @ts-expect-error unk
  const playPoints = Object.keys(applicableStatus).find((k) => applicableStatus[k] === opp);

  return [Number(playPoints ?? 0), Number(applicableStatus.base ?? 0)];
}

export const getPlayScore = (line: string) => {

  if (!line){
    return 0;
  }

  const [one, two] = line.split(" ");

  // @ts-expect-error unk
  const opp = shapes[one] as StatusKey;
  // @ts-expect-error unk
  const play = shapes[two] as StatusKey;

  if (!play || !opp) {
    throw new Error("Expecting a character for play and opp")
  }

  const [playPoints, shapePoints] = getPlayStatus(opp, play)

  if (Number.isNaN(shapePoints) || Number.isNaN(playPoints) ){
    throw new Error("Expecting numbers for both shape and play points")
  }

  const thesePoints = shapePoints + playPoints

  cache[line] = thesePoints;

  return thesePoints;
}

const solutionTwo = (input: string[]) => {
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

export default solutionTwo;