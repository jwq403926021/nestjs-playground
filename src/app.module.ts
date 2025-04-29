import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureJwtStrategy } from './guards/azure.strategy';
import { PrismaService } from './services/prisma.service';
import { AzureJwtAuthGuard } from './guards/AzureJwtAuthGuard';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './modules/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule
  ],
  controllers: [AppController],
  providers: [AppService, AzureJwtStrategy, PrismaService, AzureJwtAuthGuard],
})
export class AppModule {}
