import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";
import solutionTwo, { getPlayScore, getPlayStatus } from "./2.ts";

import solutionTwoPartTwo from "./2-1.ts";
import getInput from "../../../utils/getInput.ts";

const sampleInput = await getInput("day2-sample.txt")

Deno.test("sample input", async (t) => {
  await t.step("test result score", () => {
    const resultScore = getPlayScore("A Y")
    assertEquals(resultScore, 8)
  })

  await t.step("test result status", () => {
    const resultStatus = getPlayStatus("rock", "paper")
    assertEquals(resultStatus, [6, 2])
  })
  const result = solutionTwo(sampleInput)
  assertEquals(result, 15);
});


Deno.test("sample input part two", () => {
  const result = solutionTwoPartTwo(sampleInput)
  assertEquals(result, 12);
});