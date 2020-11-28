export enum LoggerEnum {
  DEBUG = 0,
  ERROR = 1,
}

export class Logger {
  private LEVEL: LoggerEnum = LoggerEnum.DEBUG;

  private static instance: Logger;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public static logDebug(tag: string, message: string): void {
    const instance = Logger.getInstance();

    if (instance.LEVEL <= LoggerEnum.DEBUG) {
      const msg = tag + ': ' + message;
      console.debug(msg);
    }
  }

  public static logError(tag: string, message: string): void {
    const instance = Logger.getInstance();

    if (instance.LEVEL <= LoggerEnum.ERROR) {
      const msg = tag + ': ' + message;
      console.error(msg);
    }
  }

  public static setLevel(level: LoggerEnum): void {
    const instance = Logger.getInstance();

    instance.LEVEL = level;
  }

  public static getLevel(): LoggerEnum {
    const instance = Logger.getInstance();

    return instance.LEVEL;
  }
}
