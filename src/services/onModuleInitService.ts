import { Injectable, OnModuleInit } from '@nestjs/common';
import { ScheduleJobService } from './scheduleJobService';

@Injectable()
export class OnModuleInitService implements OnModuleInit {
  constructor(
    private readonly scheduleJobService: ScheduleJobService,
  ) {}

  async onModuleInit() {
    this.scheduleJobService.arrangeJob();
  }
}
