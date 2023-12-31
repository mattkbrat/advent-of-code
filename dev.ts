#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

import { defaultOptions } from "./lib/getInputDefaultOptions.ts";
import getInput from "./utils/getInput.ts";
import solutionTwoPartTwo from "./solutions/2022/day_2/2-1.ts";
import solutionTwo from "./solutions/2022/day_2/2.ts";
import { solutionThree } from "./solutions/2022/day_3/3.ts";
import { solutionThreePartTwo } from "./solutions/2022/day_3/3-1.ts";
import fourOne2022 from "./solutions/2022/day_4/sol1.ts";
import fiveOne2022 from "./solutions/2022/day_5/sol1.ts";
import sixOne2022 from "./solutions/2022/day_6/sol1.ts";

const sample = 6 as number;
const second = true;
const withSample = false;

const inputString = `day${sample}${withSample ? "-sample" : ""}.txt`;

console.log('running solution', inputString);


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
  case 4:
    solution = second
      ? fourOne2022(solutionInput, true)
      : fourOne2022(solutionInput, false);
      break;
  case 5:
    solution = second 
    ? fiveOne2022(solutionInput, false) 
    :  fiveOne2022(solutionInput);
    break;
  case 6: 
    solution = second ? sixOne2022(solutionInput, 14) : sixOne2022(solutionInput, 4);
    break
  default:
    console.warn("Solution not linked")
}

console.log({ solution });

await dev(import.meta.url, "./main.ts", config);
