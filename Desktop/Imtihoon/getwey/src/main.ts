import { NestFactory } from '@nestjs/core';
import { App } from './app';
import { INestApplication } from '@nestjs/common';
import { appConfig, catalogConfig, swaggerConfig } from '@config';
import { SwaggerModule } from '@nestjs/swagger';



setImmediate( async() : Promise<void>=> {
  const app = await NestFactory.create<INestApplication>(App);

  
  const document =SwaggerModule.createDocument(app, swaggerConfig.options)
  SwaggerModule.setup(swaggerConfig.path, app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1
    }
  })
  await app.listen(appConfig.port);
} )