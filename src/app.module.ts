import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureJwtStrategy } from './guards/azure.strategy';
import { PrismaService } from './services/prisma.service';
import { AzureJwtAuthGuard } from './guards/AzureJwtAuthGuard';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './modules/logger.module';
import { BullModule } from '@nestjs/bullmq';
import { ScheduleJobConsumer } from './comsumers/scheduleJobConsumer';
import { OnModuleInitService } from './services/onModuleInitService';
import { ScheduleJobService } from './services/scheduleJobService';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: '127.0.0.1',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'schedule-job',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AzureJwtStrategy,
    PrismaService,
    AzureJwtAuthGuard,
    ScheduleJobConsumer,
    ScheduleJobService,
    OnModuleInitService
  ],
})
export class AppModule {}
