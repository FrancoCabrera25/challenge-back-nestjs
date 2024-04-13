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

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  code: string;
  @IsString()
  @MinLength(1)
  name: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number;
  @IsEnum(ProductSize)
  size: string;
  @IsUUID()
  categoryId: string;
}
