import chalk from "chalk";
import { AES, enc } from "crypto-js";

interface Params {
  key: string;
  data: string;
}

export const encodeString = ({ key, data }: Params) =>
  AES.encrypt(data, key).toString();

export const decodeString = ({ key, data }: Params) => {
  const bytes = AES.decrypt(data, key);
  try {
    return bytes.toString(enc.Utf8);
  } catch (error) {
    console.log(chalk.redBright("cannot read."));
    process.exit(1);
  }
};
