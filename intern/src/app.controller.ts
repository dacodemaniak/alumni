/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/v1/intern')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: 'hello'})
  getHello(): string {
    return this.appService.getHello();
  }
}
