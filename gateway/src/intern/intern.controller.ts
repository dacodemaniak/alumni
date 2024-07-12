/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { InternService } from './intern.service';
import { InternType } from './models/intern.type';

@Controller('intern')
export class InternController {
    constructor(
        private _service: InternService
    ) {}

    @Get() // GET http://localhost:3000/intern
    findAll(): Array<InternType> {
        return this._service.findAll()
    }
}
