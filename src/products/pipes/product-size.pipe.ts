/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import {
  ProductSize,
  ProductSize as ProductSizes,
} from '../enums/product-size.enum';

@Injectable()
export class ProductSizesPipe implements PipeTransform<string, ProductSizes[]> {
  transform(
    value: string | string[],
    metadata: ArgumentMetadata,
  ): ProductSize[] {
    if (!value) {
      throw new BadRequestException('Not found sizes in query params');
    }

    if (typeof value === 'string') {
      if (value.includes(',')) {
        return value.split(',').map((size) => size.trim() as ProductSize);
      } else {
        return [value] as ProductSizes[];
      }
    }
  }
}
