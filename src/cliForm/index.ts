import {
  inputData,
  inputFilePath,
  inputKey,
  inputSelectionType,
} from "./prompt";
import { RUN } from "../constants";

export const cliForm = async () => {
  const { selectionType } = await inputSelectionType([...Object.values(RUN)]);

  let data: { key: string; filePath: string; data?: string } | null = null;
  if (selectionType === RUN.SAVE) {
    data = await inputForFileSave();
  } else if (selectionType === RUN.LOAD) {
    data = await inputForFileLoad();
  }
  return { selectionType, data };
};

const inputForFileSave = async () => {
  const { saveData }: { saveData: string } = await inputData();
  const { filePath }: { filePath: string } = await inputFilePath();
  const { key }: { key: string } = await inputKey();

  return { key, filePath, data: saveData };
};

const inputForFileLoad = async () => {
  const { filePath }: { filePath: string } = await inputFilePath();
  const { key }: { key: string } = await inputKey();

  return { key, filePath };
};
