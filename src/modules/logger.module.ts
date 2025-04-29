import { Module } from '@nestjs/common';
import { WinstonLoggerService } from '../services/winstonLoggerService';

@Module({
  providers: [WinstonLoggerService],
  exports: [WinstonLoggerService],
})
export class LoggerModule {}
