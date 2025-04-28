import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test-init')
  @UseGuards(AuthGuard('azure-jwt'))
  getHello(): Object {
    return this.appService.getHello();
  }
}
