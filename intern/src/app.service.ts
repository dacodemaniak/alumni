import { Injectable, Logger } from '@nestjs/common';
import { InternService } from './intern-service.interface';
import { Intern, InternDocument } from './models/intern.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService implements InternService {
  constructor(
    @InjectModel(Intern.name) private internModel: Model<InternDocument>
  ) {}

  async save(intern: Intern): Promise<Intern | any> {
    throw new Error('Method not implemented.');
  }

  async update(intern: Intern): Promise<Intern | any> {
    throw new Error('Method not implemented.');
  }

  async findOne(payload: any): Promise<Intern | any> {
    return await this.internModel.findOne({
      _id: payload.id
    })
  }
  
  async findAll(): Promise<Array<Intern>> {
    return await this.internModel.find()
  }
  
  
}
