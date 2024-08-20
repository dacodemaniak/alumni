import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ENV } from 'src/config/env.config'

@Module({
    imports: [
        MongooseModule.forRoot(ENV.DATABASE_DSN)
    ],
    exports: [
        MongooseModule
    ]
})
export class DatabaseModule {}