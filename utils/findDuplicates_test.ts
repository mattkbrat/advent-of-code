import { assertEquals } from "https://deno.land/std@0.202.0/assert/assert_equals.ts";
import findDuplicates from "./findDuplicates.ts";

const sampleTests = [
  {
    input: ["vJrwpWtwJgWr", "hcsFMMfFFhFp"],
    expected: ["p"],
  },
  {
    input: ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"],
    expected: ["L"],
  },
  {
    input: [
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
    ],
    expected: ["r"],
  },
  {
    input: [
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
      "ttgJtRGJQctTZtZT",
      "CrZsJsPPZsGzwwsLwLmpwMDw",
    ],
    expected: ["Z"],
  },
];

Deno.test("split text into groups", async (t) => {
  for (const test of sampleTests) {
    await t.step({
      name: test.expected[0],
      fn: () => {
        const originalInput = [...test.input];
        assertEquals(findDuplicates(test.input, test.input.length - 1), test.expected);

        // Input should not change.
        assertEquals(test.input, originalInput);
      },
    });
  }
});
