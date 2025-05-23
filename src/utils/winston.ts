import { createLogger, format, transports } from 'winston';
import * as path from 'path';
import * as os from 'node:os';

const logDir = path.join(os.homedir(), 'logs');
// const logDir = 'logs';
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: () => new Date().toISOString()
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  handleExceptions: true,
  handleRejections: true,
  transports: [
    new transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error',
    }),
    new transports.File({
      filename: path.join(logDir, 'combined.log'),
    }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: path.join(logDir, 'exceptions.log') })
  ],
  rejectionHandlers: [
    new transports.File({ filename: path.join(logDir, 'rejections.log') })
  ],
});

export default logger;
