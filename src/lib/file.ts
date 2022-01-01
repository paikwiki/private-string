import fs from "fs-extra";

interface Params {
  filePath: string;
  data: string;
}

export const readFromFile = (filePath: string) => {
  const bytes = fs.readFileSync(filePath);
  return bytes.toString();
};

export const writeToFile = ({ filePath, data }: Params) => {
  fs.writeFileSync(filePath, data);
};
