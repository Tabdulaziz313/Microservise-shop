import { NestFactory } from '@nestjs/core';
import { App } from './app';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { Options, ValidationPipe } from '@nestjs/common';
import { appConfig } from '@config';
import { AllExceptionsFilter } from 'filtres';

setImmediate(async (): Promise<void> => {
  const app = await NestFactory.createMicroservice<TcpOptions>(App, {
    transport: Transport.TCP,
    options: appConfig.options,
  });

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
});
