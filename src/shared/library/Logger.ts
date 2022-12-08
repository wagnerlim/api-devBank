import chalk from "chalk";
import moment from "moment";

interface IColors {
  green: string;
  blue: string;
  yellow: string;
  red: string;
}
export default class Logger {
  private colors: IColors;

  SetColorsProps(colors: IColors) {
    this.colors = colors;
  }

  constructor(colors: IColors) {
    moment.locale("pt-Br");
    this.colors = colors;
  }

  public static info(value: any) {
    console.log(
      chalk.blue(`${new Date().toLocaleString()} [INFO]`),
      typeof value === "string" ? chalk.blue(value) : value
    );
  }

  public static warn(value: any) {
    console.log(
      chalk.blue(`${new Date().toLocaleString()} [WARN]`),
      typeof value === "string" ? chalk.yellowBright(value) : value
    );
  }

  public static error(value: any) {
    console.log(
      chalk.blue(`${new Date().toLocaleString()} [ERROR]`),
      typeof value === "string" ? chalk.redBright(value) : value
    );
  }

  response(response: any, request: any, timer: string) {
    const hours = moment().format("hh:mm:ss");
    console.log(
      `${hours} [${this.resolveMethods(request.method)}] - ${
        request.url
      } ${this.resolveStatus(String(response.statusCode))} ${timer}ms`
    );
  }

  setColors(colors: IColors): void {
    this.SetColorsProps(colors);
  }

  private resolveMethods(method: string) {
    switch (method) {
      case "GET":
        return chalk.hex(this.colors.green).visible(method);
      case "POST":
        return chalk.hex(this.colors.yellow).visible(method);
      case "PUT":
        return chalk.hex(this.colors.blue).visible(method);
      case "DELETE":
        return chalk.hex(this.colors.red).visible(method);
      default:
        return chalk.hex(this.colors.red).visible(method);
    }
  }

  private resolveStatus(status: string) {
    switch (status) {
      case "200":
      case "201":
      case "202":
      case "203":
      case "204":
      case "205":
      case "206":
      case "207":
        return chalk.hex(this.colors.green).visible(status);
      case "401":
      case "402":
      case "403":
      case "404":
      case "405":
      case "406":
        return chalk.hex(this.colors.yellow).visible(status);
      default:
        return chalk.hex(this.colors.red).visible(status);
    }
  }
}
