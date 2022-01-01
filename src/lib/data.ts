import chalk from "chalk";

import { encodeString, decodeString } from "./string";
import { writeToFile, readFromFile } from "./file";

interface SaveParams {
  key: string;
  data: string;
  filePath: string;
}

interface LoadParams {
  key: string;
  filePath: string;
}

export const saveData = ({ key, data, filePath }: SaveParams) =>
  writeToFile({ data: encodeString({ key, data }), filePath });

export const loadData = ({ key, filePath }: LoadParams) => {
  const decodedText = decodeString({
    key: key,
    data: readFromFile(filePath),
  });

  if (decodedText.length > 0) console.log(decodedText);
  else console.log(chalk.redBright("cannot read"));
};
