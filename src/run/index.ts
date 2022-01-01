import { loadData, saveData } from "../lib/data";
import { RUN } from "../constants";
import chalk from "chalk";

interface RunParams {
  selectionType: string;
  data: { key: string; filePath: string; data?: string };
}

export const run = ({
  selectionType,
  data: { key, filePath, data },
}: RunParams) => {
  if (selectionType === RUN.SAVE) {
    if (!data) throw new Error(chalk.redBright("no data"));
    saveData({ key, filePath, data });
  } else if (selectionType === RUN.LOAD) {
    loadData({ key, filePath });
  }
};
