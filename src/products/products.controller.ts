import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductSize } from './enums/product-size.enum';
import { ProductSizesPipe } from './pipes/product-size.pipe';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiResponse({
    status: 201,
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 404, description: 'Bad request' })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiResponse({
    status: 200,
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 404, description: 'Bad request' })
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
  @ApiResponse({
    status: 200,
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 404, description: 'Bad request' })
  @Get('withActiveCategory')
  findAllWithActiveCategory() {
    return this.productsService.findAllWithActiveCategory();
  }

  @ApiResponse({
    status: 200,
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 404, description: 'Bad request' })
  @Get('size')
  findBySize(@Query('sizes', ProductSizesPipe) sizes: ProductSize[]) {
    return this.productsService.findBySize(sizes);
  }
  @ApiResponse({
    status: 200,
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 404, description: 'Bad request' })
  @Get('sizesWithLargeAndMedium')
  findBySizesWithLargeAndMedium() {
    return this.productsService.findBySizesWithLargeAndMedium();
  }

  @ApiResponse({
    status: 200,
    type: Product,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 404, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.remove(id);
  }
}
