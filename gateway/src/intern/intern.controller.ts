/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { InternService } from './intern.service';
import { InternType } from './models/intern.type';
import { Observable, take } from 'rxjs';

@Controller('intern')
export class InternController {
    constructor(
        private _service: InternService
    ) {}

    @Get() // GET http://localhost:3000/intern
    findAll(): Observable<Array<InternType>> {
        return this._service.findAll()
            .pipe(
                take(1) // Autre façon  d'arrêter d'observer
            )
    }
}
