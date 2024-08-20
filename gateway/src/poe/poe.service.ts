import { Injectable } from '@nestjs/common';
import { CreatePoeDto } from './dto/create-poe.dto';
import { UpdatePoeDto } from './dto/update-poe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Poe } from './entities/poe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoeService {
  constructor(
  ) {}

  create(createPoeDto: CreatePoeDto) {
    return 'This action adds a new poe';
  }

  findAll() {
    throw new Error(`Method not implemented`)
  }

  findOne(id: number) {
    throw new Error(`Method not implemented`)
  }

  update(id: number, updatePoeDto: UpdatePoeDto) {
    return `This action updates a #${id} poe`;
  }

  remove(id: number) {
    return `This action removes a #${id} poe`;
  }
}
