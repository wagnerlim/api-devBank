import chalk from "chalk";
import moment from "moment";
import chalkColors, { IHexColors, IRgbColors } from "../Colors/chalkColors";

export default class Logger extends chalkColors {
  SetColorsProps(colors: IHexColors | IRgbColors) {
    this.colors = colors;
  }

  constructor(colors: IHexColors | IRgbColors) {
    super(colors);
    moment.locale("pt-Br");
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

  setColors(colors: IHexColors | IRgbColors): void {
    this.SetColorsProps(colors);
  }

  private resolveMethods(method: string) {
    if (this.colors.type === "HEX") {
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
    } else {
      switch (method) {
        case "GET":
          return chalk
            .rgb(
              this.colors.green.green,
              this.colors.green.blue,
              this.colors.green.red
            )
            .visible(method);
        case "POST":
          return chalk
            .rgb(
              this.colors.yellow.green,
              this.colors.yellow.blue,
              this.colors.yellow.red
            )
            .visible(method);
        case "PUT":
          return chalk
            .rgb(
              this.colors.blue.green,
              this.colors.blue.blue,
              this.colors.blue.red
            )
            .visible(method);
        case "DELETE":
          return chalk
            .rgb(
              this.colors.red.green,
              this.colors.red.blue,
              this.colors.red.red
            )
            .visible(method);
        default:
          return chalk
            .rgb(
              this.colors.red.green,
              this.colors.red.blue,
              this.colors.red.red
            )
            .visible(method);
      }
    }
  }

  private resolveStatus(status: string) {
    if (this.colors.type === "HEX") {
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
    switch (status) {
      case "200":
      case "201":
      case "202":
      case "203":
      case "204":
      case "205":
      case "206":
      case "207":
        return chalk
          .rgb(
            this.colors.green.green,
            this.colors.green.blue,
            this.colors.green.red
          )
          .visible(status);
      case "401":
      case "402":
      case "403":
      case "404":
      case "405":
      case "406":
        return chalk
          .rgb(
            this.colors.yellow.green,
            this.colors.yellow.blue,
            this.colors.yellow.red
          )
          .visible(status);
      default:
        return chalk
          .rgb(this.colors.red.green, this.colors.red.blue, this.colors.red.red)
          .visible(status);
    }
  }
}
