import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternRepository } from './intern-repository';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Intern, InternSchema } from './models/intern.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      {
        name: Intern.name,
        schema: InternSchema
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService, InternRepository],
})
export class AppModule {}
