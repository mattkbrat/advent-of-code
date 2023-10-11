import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";

import getInput from "../../utils/getInput.ts";
import { solutionThree } from "./3.ts";

const sampleInput = await getInput("day3-sample.txt")

Deno.test("sample input", () => {
  const result = solutionThree(sampleInput)
  assertEquals(result, 157);
});