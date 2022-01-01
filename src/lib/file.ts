import fs from "fs-extra";

interface WriteToFileParams {
  filePath: string;
  data: string;
}

export const readFromFile = (filePath: string) => {
  const bytes = fs.readFileSync(filePath);
  return bytes.toString();
};

export const writeToFile = ({ filePath, data }: WriteToFileParams) => {
  fs.writeFileSync(filePath, data);
};
