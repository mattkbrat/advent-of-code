#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

import { defaultOptions } from "./lib/getInputDefaultOptions.ts";
import getInput from "./utils/getInput.ts";
import solutionTwoPartTwo from "./solutions/day_2/2-1.ts";
import solutionTwo from "./solutions/day_2/2.ts";

const sample = 2 as number;
const second = true;

const solutionInput = await getInput(`day${sample}.txt`, {
  ...defaultOptions,
  // "maxLines": 50,
})

let solution: unknown = "";

switch (sample) {
  case 2: {
    solution = second ? solutionTwoPartTwo(solutionInput) : solutionTwo(solutionInput) 
  }
}

console.log({solution})

await dev(import.meta.url, "./main.ts", config);
