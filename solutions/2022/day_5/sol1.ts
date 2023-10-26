import notEmpty from "../../../utils/notEmpty.ts";

const fiveOne2022 = (content: string[], moveIndividually = true) => {
  // const numberOfStacks = content[0].replace(/[\W_]+/g," ").length;

  const crateStacks: string[] = new Array(15).fill("");
  const instructions: { oldStack: number; newStack: number; crates: number }[] =
    [];

  let numbers: number[] = [];
  let stripped: string[] = [];

  for (let line of content) {
    let lineType: "instruction" | "stack" | undefined = undefined;

    if (line[0] === "m") {
      lineType = "instruction";
    } else if (line.includes("[")) {
      lineType = "stack";
    }

    if (!lineType) {
      continue;
    }

    switch (lineType) {
      case "instruction":
        numbers = line.split(" ").map((w) =>
          Number.isNaN(Number(w)) ? null : Number(w)
        ).filter(notEmpty);
        instructions.push({
          crates: numbers[0],
          oldStack: numbers[1] - 1,
          newStack: numbers[2] - 1,
        });
        break;
      case "stack":
        // replace all brackets with whitespace
        // replace all gaps of two with a dash
        // replace all spaces with empty string
        // replace all double dashes (4 spaces) with a space
        // split on each character
        stripped = line
          .replaceAll("[", "")
          .replaceAll("]", "")
          .replaceAll("  ", "-")
          .replaceAll(" ", "")
          .replaceAll("--", " ")
          .split("");

        stripped.map((r, n) => {
          if (r === " " || !r) return;
          crateStacks[n] += r;
        });
        break;
    }
  }

  for (const instruction of instructions) {
    const { crates, oldStack, newStack } = instruction;

    const old = crateStacks[oldStack];
    let spliced = old.substring(0, crates);

    if (moveIndividually) {
      spliced = spliced.split("").reverse().join("");
    }

    if (spliced.includes("n") || typeof old === "undefined") {
      console.log("invalid stack number", instruction, crateStacks);
      throw new Error("Invalid stack passed!");
    }

    crateStacks[oldStack] = old.substring(spliced.length);
    crateStacks[newStack] = `${spliced}${crateStacks[newStack]}`;
  }

  return crateStacks.map((s) => s[0]).join("");
};

export default fiveOne2022;
