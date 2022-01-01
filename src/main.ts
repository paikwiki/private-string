import { cliForm } from "./cliForm";
import { run } from "./run";

const main = async () => {
  const { selectionType, data } = await cliForm();

  try {
    run({ selectionType, data });
  } catch (error) {
    console.log(error);
  }
};

main();
