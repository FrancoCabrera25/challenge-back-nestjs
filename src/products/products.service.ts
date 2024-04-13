import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
    try {
      const category = await this.categoryService.findOne(
        createProductDto.categoryId,
      );
      const product = this.productRepository.create({
        ...createProductDto,
        category,
      });

      return await this.productRepository.save(product);
    } catch (error) {
      throw new InternalServerErrorException('Error al insertar product');
    }
  }

  findAll() {
    return this.productRepository.find({});
  }

  findAllWithActiveCategory() {
    return this.productRepository.find({
      relations: {
        category: true,
      },
      where: {
        category: {
          active: true,
        },
      },
    });
  }

  async findBySize(sizes: ProductSize[]) {
    const queryBuilder = this.productRepository.createQueryBuilder('product');
    return await queryBuilder
      .where('size IN (:...sizes)', {
        sizes,
      })
      .getMany();
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
}
