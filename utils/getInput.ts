import { defaultOptions } from "../lib/getInputDefaultOptions.ts";

const getInput = async (filename: string, options: {
  folder?: string;
  splitChar?: string | null;
  maxLines?: null | number;
} = defaultOptions) => {
  const text = (await Deno.readTextFile(`${options.folder}/${filename}`))
    .trimEnd();
  const textSplit = (options.splitChar ? text.split(options.splitChar) : [text])
    .map((s) => s.replace(/(\r\n|\n|\r)/gm, ""));
  const textSub = options.maxLines
    ? textSplit.slice(0, options.maxLines)
    : textSplit;

  return textSub;
};

export default getInput;
