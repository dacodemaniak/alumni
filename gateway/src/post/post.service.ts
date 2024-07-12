/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PostRepository } from './post-repository';
import { PostType } from './models/post.type';

@Injectable()
export class PostService {
    private _repository: PostRepository;

    constructor() {
        this._repository = new PostRepository()
    }

    findAll(): Array<PostType> {
        return this._repository.findAll()
    }
}
