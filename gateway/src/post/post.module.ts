import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './models/post-entity';

@Module({
  providers: [PostService],
  controllers: [PostController],
  imports: [],
})
export class PostModule {}
