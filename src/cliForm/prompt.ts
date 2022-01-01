import inquirer from "inquirer";

export const inputSelectionType = async (selections: string[]) =>
  await inquirer.prompt({
    type: "list",
    name: "selectionType",
    message: "What do you want?",
    choices: selections,
  });

export const inputData = async () =>
  await inquirer.prompt({
    type: "input",
    name: "saveData",
    message: "data",
  });

export const inputKey = async () =>
  await inquirer.prompt({
    type: "password",
    name: "key",
    message: "key",
  });

export const inputFilePath = async () =>
  await inquirer.prompt({
    type: "input",
    name: "filePath",
    message: "filePath",
    default: "./data.dat",
  });
