import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { ProductSize } from '../enums/product-size.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number;

  @ApiProperty()
  @IsEnum(ProductSize)
  size: string;

  @ApiProperty()
  @IsUUID()
  categoryId: string;
}
