import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ENV } from './config/env.config'

async function bootstrap() {
  const app = await NestFactory
    .createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.TCP,
      options: {
        host: ENV.host,
        port: ENV.port
      }
    });
  await app.listen();
}
bootstrap();
