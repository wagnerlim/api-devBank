import chalk from "chalk";

export default class Logger {
  public static info = (value: any) =>
    console.log(
      chalk.blue(`${new Date().toLocaleString()} [INFO]`),
      typeof value === "string" ? chalk.blue(value) : value
    );

  public static warn = (value: any) =>
    console.log(
      chalk.blue(`${new Date().toLocaleString()} [WARN]`),
      typeof value === "string" ? chalk.yellowBright(value) : value
    );

  public static error = (value: any) =>
    console.log(
      chalk.blue(`${new Date().toLocaleString()} [ERROR]`),
      typeof value === "string" ? chalk.redBright(value) : value
    );
}
