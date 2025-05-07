import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureJwtStrategy } from './guards/azure.strategy';
import { PrismaService } from './services/prisma.service';
import { AzureJwtAuthGuard } from './guards/AzureJwtAuthGuard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, AzureJwtStrategy, PrismaService, AzureJwtAuthGuard],
})
export class AppModule {}
