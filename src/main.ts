import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AzureJwtAuthGuard } from './guards/AzureJwtAuthGuard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  const azureJwtAuthGuard = app.get(AzureJwtAuthGuard);
  app.useGlobalGuards(azureJwtAuthGuard);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
