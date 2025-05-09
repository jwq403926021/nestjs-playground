import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';
import { WinstonLoggerService } from './winstonLoggerService';

@Injectable()
export class ScheduleJobService {
  constructor(
    @InjectQueue('schedule-job') private scheduleJobQueue: Queue,
    private readonly loggerService: WinstonLoggerService
  ) {}

  async arrangeJob () {
    this.loggerService.log('Arrange Job');
    await this.scheduleJobQueue.add('first-job', {
      foo: 'bar',
    }, {
      repeat: {
        pattern: '* * * * *'
      },
      jobId: 'repeat-every-minute'
    });
  }
}
