import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternModule } from './intern/intern.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [InternModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
