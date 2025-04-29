import { LoggerService } from '@nestjs/common';
import logger from '../utils/winston';

export class WinstonLoggerService implements LoggerService {
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
  }
  error(message: any, trace?: string) {
    logger.error(message, { trace, context: this.getCallerContext() });
  }
  warn(message: any) {
    logger.warn(message, { context: this.getCallerContext() });
  }
  debug?(message: any) {
    logger.debug(message, { context: this.getCallerContext() });
  }
  verbose?(message: any) {
    logger.verbose(message, { context: this.getCallerContext() });
  }
}

