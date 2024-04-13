import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  description: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
