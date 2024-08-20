import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Intern } from './models/intern.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({intern: 'one'})
  async findOne(payload: any): Promise<Intern | null> {
    return await this.appService.findOne(payload.id);
  }

  @MessagePattern({intern: 'all'})
  async findAll(): Promise<Array<Intern>> {
    return await this.appService.findAll()
  }


}
