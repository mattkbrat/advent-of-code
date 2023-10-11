#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

import { defaultOptions } from "./lib/getInputDefaultOptions.ts";
import getInput from "./utils/getInput.ts";
import solutionTwoPartTwo from "./solutions/day_2/2-1.ts";
import solutionTwo from "./solutions/day_2/2.ts";
import { solutionThree } from "./solutions/day_3/3.ts";
import { solutionThreePartTwo } from "./solutions/day_3/3-1.ts";

const sample = 3 as number;
const second = true;
const withSample = false;

console.log("Hello");

const inputString = `day${sample}${withSample ? "-sample" : ""}.txt`;

const solutionInput = await getInput(
  inputString,
  {
    ...defaultOptions,
    // "maxLines": 50,
  },
);

let solution: unknown = null;

switch (sample) {
  case 2:
    solution = second
      ? solutionTwoPartTwo(solutionInput)
      : solutionTwo(solutionInput);
    break;
  case 3:
    solution = second
      ? solutionThreePartTwo(solutionInput)
      : solutionThree(solutionInput);
    break;
}

console.log({ solution });

await dev(import.meta.url, "./main.ts", config);
