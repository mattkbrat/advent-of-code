import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";

import getInput from "../../../utils/getInput.ts";
import fourOne2022 from "./sol1.ts";

const sampleInput = await getInput("day4.txt")

Deno.test("sample input", () => {
  const result = fourOne2022(sampleInput, false)
  assertEquals(result, 567);
});

Deno.test("sample input part two", () => {
  const result = fourOne2022(sampleInput, true)
  assertEquals(result, 907);
});