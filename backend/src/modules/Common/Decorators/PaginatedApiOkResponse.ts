import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { PaginatedDto } from '../Dto/PaginatedDto';

export function PaginatedApiOkResponse(dto) {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedDto) },
          {
            properties: {
              items: {
                type: 'array',
                items: { $ref: getSchemaPath(dto) },
              },
            },
          },
        ],
      },
    }),
  );
}
