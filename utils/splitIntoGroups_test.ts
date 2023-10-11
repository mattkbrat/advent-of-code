import { assertEquals } from "https://deno.land/std@0.202.0/assert/assert_equals.ts";
import { array, text } from "./splitIntoGroups.ts";

const sampleTests = [{
  input: "vJrwpWtwJgWrhcsFMMfFFhFp",
  expected: ["vJrwpWtwJgWr", "hcsFMMfFFhFp"],
}, {
  input: "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  expected: ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"],
}];

const sampleArrayTests = [{
  input: ["1", "2", "3"],
  expected: [["1", "2"], ["3"]],
}, {
  input: ["a", "b", "c", "d"],
  expected: [["a", "b"], ["c", "d"]],
}];

Deno.test("split string into groups", async (t) => {
  for (const test of sampleTests) {
    await t.step({
      name: test.input,
      fn: () => {
        assertEquals(text(test.input), test.expected);
      },
    });
  }
});

Deno.test("chunk arrays into groups of 2", async (t) => {
  for (const test of sampleArrayTests) {
    await t.step({
      name: test.input[0],
      fn: () => {
        assertEquals(array(test.input, 2), test.expected);
      },
    });
  }
});
