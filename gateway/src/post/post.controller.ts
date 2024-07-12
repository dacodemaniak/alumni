/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { PostType } from './models/post.type';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private _service: PostService) {}
    
    @Get()
    findAll(): Array<PostType> {
        return this._service.findAll()
    }
}
