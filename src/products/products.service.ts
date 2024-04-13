import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { ProductSize } from './enums/product-size.enum';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly categoryService: CategoriesService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const category = await this.categoryService.findOne(
      createProductDto.categoryId,
    );
    const product = this.productRepository.create({
      ...createProductDto,
      category,
    });

    return await this.productRepository.save(product);
  }

  async findAll() {
    const products = await this.productRepository.find({});

    if (products.length !== 0) return products;

    throw new NotFoundException(`Products not found`);
  }

  async findAllWithActiveCategory() {
    const products = await this.productRepository.find({
      relations: {
        category: true,
      },
      where: {
        category: {
          active: true,
        },
      },
    });

    if (products.length !== 0) return products;

    throw new NotFoundException(`Products not found`);
  }

  async findBySize(sizes: ProductSize[]) {
    return await this.getProductBySize(sizes);
  }
  async findBySizesWithLargeAndMedium() {
    return await this.getProductBySize([ProductSize.LARGE, ProductSize.MEDIUM]);
  }

  private async getProductBySize(sizes: ProductSize[]) {
    const queryBuilder = this.productRepository.createQueryBuilder('product');
    const sizesResult = await queryBuilder
      .where('size IN (:...sizes)', {
        sizes,
      })
      .getMany();

    if (sizesResult.length !== 0) return sizesResult;

    throw new NotFoundException(`Products not found`);
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const category = await this.categoryService.findOne(
      updateProductDto.categoryId,
    );

    const product = await this.productRepository.preload({
      id,
      ...updateProductDto,
      category,
    });

    if (!product) {
      throw new NotFoundException(`Product with id: ${id} not found `);
    }

    return await this.productRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);

    await this.productRepository.remove(product);
  }

  async removeAllProducts() {
    const query = this.productRepository.createQueryBuilder('product');
    return await query.delete().where({}).execute();
  }
}
