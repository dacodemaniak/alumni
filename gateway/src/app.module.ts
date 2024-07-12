/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternModule } from './intern/intern.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostEntity } from './post/models/post-entity';
import { PoeModule } from './poe/poe.module';
import { Poe } from './poe/entities/poe.entity';

@Module({
  imports: [InternModule, PostModule, TypeOrmModule.forRoot(AppModule.mariaDBConfig), PoeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public static mariaDBConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'post_db_admin',
    password: 'admin_db_post',
    database: 'post_repository',
    synchronize: true,
    entities: [
      PostEntity,
      Poe
    ],
  };
}
