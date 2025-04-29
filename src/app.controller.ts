import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { Prisma } from '@prisma/client';
import { ResponseEntity } from './entities/ResponseEntity';
import { Public } from './decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly prismaService: PrismaService) {}

  @Get('/test-init')
  async getHello() {
    const data: Prisma.UserCreateInput = {
      email: `${+new Date()}@qq.com`,
      name: 'jiang haha',
      role: 'USER'
    }
    const res = await this.prismaService.user.create({
      data
    });
    return ResponseEntity.OK(res)
  }

  @Public()
  @Get('/test-public')
  async testPublic() {
    // throw new Error('test error case.')
    return 'test-public'
  }
}
