import { assertEquals } from "https://deno.land/std@0.202.0/assert/assert_equals.ts";
import findDuplicates from "./findDuplicates.ts";



const sampleTests = [{
  input: ["vJrwpWtwJgWr", "hcsFMMfFFhFp"],
  expected: ["p"]
}, {
  input: ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"],
  expected: ["L"]
}]

Deno.test("split text into groups", async (t) => {
  for (const test of sampleTests) {
    await t.step({
      name: test.expected[0],
      fn: () => {
        assertEquals(findDuplicates(test.input), test.expected)
      }
    })
  }
});