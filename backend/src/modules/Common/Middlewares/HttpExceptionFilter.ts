import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(err: HttpException, host: ArgumentsHost): any {
    const response = host.switchToHttp().getResponse<Response>();
    if (err instanceof HttpException) {
      return response.status(err.getStatus()).json({
        status: 'error',
        message: (<any>err.getResponse())?.message || [err.message],
      });
    }
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: (<Error>err).message || 'Internal Server Error',
    });
  }
}
