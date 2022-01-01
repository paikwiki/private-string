import chalk from "chalk";
import { AES, enc } from "crypto-js";

interface ConvertParams {
  key: string;
  data: string;
}

export const encodeString = ({ key, data }: ConvertParams) =>
  AES.encrypt(data, key).toString();

export const decodeString = ({ key, data }: ConvertParams) => {
  const bytes = AES.decrypt(data, key);
  try {
    return bytes.toString(enc.Utf8);
  } catch (error) {
    console.log(chalk.redBright("cannot read."));
    process.exit(1);
  }
};
