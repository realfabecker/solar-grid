import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { HttpExceptionFilter } from './Common/Middlewares/HttpExceptionFilter';
import { TransformInterceptor } from './Common/Interceptors/TransformInterceptor';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

export class AppFactory {
  static async create() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalPipes(
      new ValidationPipe({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    app.setGlobalPrefix('api');
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('combined'));
    app.use(helmet());
    app.use(cors({ origin: '*' }));
    const config = new DocumentBuilder()
      .setTitle('SolarGrid')
      .setVersion('v1')
      .addBasicAuth()
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
    return app;
  }
}
