import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Object {
    return {
      data: 'Hello 11111!',
      success: true
    };
  }
}
