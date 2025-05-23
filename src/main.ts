import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AzureJwtAuthGuard } from './guards/AzureJwtAuthGuard';
import { AllExceptionsFilter } from './filters/AllExceptionsFilter';
import { WinstonLoggerService } from './services/winstonLoggerService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });
  const azureJwtAuthGuard = app.get(AzureJwtAuthGuard);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalGuards(azureJwtAuthGuard);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useLogger(new WinstonLoggerService());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
