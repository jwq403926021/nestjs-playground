import { ConsoleLogger, Injectable } from '@nestjs/common';
import logger from '../utils/winston';

@Injectable()
export class WinstonLoggerService extends ConsoleLogger {
  private getCallerContext(): string {
    const stack = new Error().stack;
    if (!stack) return 'unknown';

    const stackLines = stack.split('\n');
    if (stackLines.length < 4) return 'unknown';

    const callerLine = stackLines[3];

    const match = callerLine.match(/\((.*):(\d+):(\d+)\)/);
    if (match) {
      const filePath = match[1];
      const lineNumber = match[2];
      const filename = filePath.split('/').pop();
      return `${filename}:${lineNumber}`;
    }

    return 'unknown';
  }

  log(message: any) {
    logger.info(message, { context: this.getCallerContext() });
    // @ts-ignore
    super.log(...arguments);
  }
  error(message: any, stack?: string, context?: string) {
    logger.error(message, { context: this.getCallerContext() });
    // @ts-ignore
    super.error(...arguments);
  }
  warn(message: any) {
    logger.warn(message, { context: this.getCallerContext() });
    // @ts-ignore
    super.warn(...arguments);
  }
  debug(message: any) {
    logger.debug(message, { context: this.getCallerContext() });
    // @ts-ignore
    super.debug(...arguments);
  }
  verbose(message: any) {
    logger.verbose(message, { context: this.getCallerContext() });
    // @ts-ignore
    super.verbose(...arguments);
  }
}

