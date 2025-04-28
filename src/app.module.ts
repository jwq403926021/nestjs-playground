import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureJwtStrategy } from './auth-strategy/azure.strategy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AzureJwtStrategy]
})
export class AppModule {}
