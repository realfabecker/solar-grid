import { ApiProperty } from '@nestjs/swagger';

export class PaginatedDto<TData> {
  items: TData[];

  @ApiProperty({ example: 1 })
  total: number;

  @ApiProperty({ example: 1 })
  limit: number;

  @ApiProperty({ example: 1 })
  offset: number;

  constructor(props?: Partial<PaginatedDto<TData>>) {
    this.items = props.items || [];
    this.total = props.total || 0;
    this.limit = props.limit || 0;
    this.offset = props.offset || 0;
  }
}
