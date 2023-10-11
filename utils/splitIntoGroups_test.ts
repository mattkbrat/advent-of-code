import { assertEquals } from "https://deno.land/std@0.202.0/assert/assert_equals.ts";
import { text } from "./splitIntoGroups.ts";


const sampleTests = [{
  input: "vJrwpWtwJgWrhcsFMMfFFhFp",
  expected: ["vJrwpWtwJgWr", "hcsFMMfFFhFp"]
}, {
  input: "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  expected: ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"]
}]

Deno.test("split text into groups", async (t) => {

  for (const test of sampleTests) {
    await t.step({
      name: test.input,
      fn: () => {
        assertEquals(text(test.input), test.expected)
      }
    })
  }

});