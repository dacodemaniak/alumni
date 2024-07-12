/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InternRepository } from './intern-repository';
import { InternType } from './models/intern.type';

@Injectable()
export class InternService {
    private _repository: InternRepository;

    constructor() {
        this._repository = new InternRepository();
    }

    findAll(): Array<InternType> {
        return this._repository.findAll();
    }
}
