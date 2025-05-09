import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { WinstonLoggerService } from '../services/winstonLoggerService';

@Processor('schedule-job')
export class ScheduleJobConsumer extends WorkerHost {
  constructor(
    private readonly loggerService: WinstonLoggerService
  ) {
    super();
  }
  async process(job: Job<any, any, string>): Promise<any> {
    console.log(job);
    return {};
  }
}
