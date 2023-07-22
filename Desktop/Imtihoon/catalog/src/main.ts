import { NestFactory } from '@nestjs/core';
import { App } from './app';
import { MicroserviceOptions, TcpOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { appConfig } from './config/app.config';


setImmediate( async (): Promise<void> =>{
  const app = await NestFactory.createMicroservice<TcpOptions>(
    App, {
    transport: Transport.TCP,
    options: appConfig.options,
  })


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
    }),
  )

  await app.listen()
} )

