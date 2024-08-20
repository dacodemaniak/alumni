import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './models/post-entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {

    constructor(
        
    ) {
    }

    findAll(): Promise<Array<PostEntity>> {
        throw new Error(`Method not implemented`)
    }
}
