import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";

import getInput from "../../../utils/getInput.ts";
import { solutionThree } from "./3.ts";
import { solutionThreePartTwo } from "./3-1.ts";

const sampleInput = await getInput("day3-sample.txt")

Deno.test("sample input", () => {
  const result = solutionThree(sampleInput)
  assertEquals(result, 157);
});

Deno.test("sample input part two", () => {
  const result = solutionThreePartTwo(sampleInput)
  assertEquals(result, 70);
});