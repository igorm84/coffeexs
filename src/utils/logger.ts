import chalk from "chalk";

const SPACE_IDENTATION = 2;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LogArgs = any[];

class Logger {
  private parseArgs(args: LogArgs) {
    return args.map((arg) => {
      return typeof arg === "object"
        ? JSON.stringify(arg, null, SPACE_IDENTATION)
        : arg;
    });
  }

  private timestamp() {
    return chalk.gray(new Date().toLocaleTimeString());
  }

  public log(...args: LogArgs) {
    console.log(
      `[${chalk.cyan("INFO")}] ${this.timestamp()}`,
      chalk.green(...this.parseArgs(args)),
    );
  }

  public info(...args: LogArgs) {
    console.log(
      `[${chalk.cyan("INF")}] ${this.timestamp()}`,
      ...this.parseArgs(args),
    );
  }

  public error(...args: LogArgs) {
    console.log(
      `[${chalk.red("ERROR")}] ${this.timestamp()}`,
      chalk.red(...this.parseArgs(args)),
    );
  }

  public warn(...args: LogArgs) {
    console.log(
      `[${chalk.yellow("WARN")}] ${this.timestamp()}`,
      chalk.yellow(...this.parseArgs(args)),
    );
  }
}

export default new Logger();
