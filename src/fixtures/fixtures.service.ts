import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { CategoriesService } from '../categories/categories.service';
import { INITIAL_DATA } from './data/fixture-data';
import { Category } from '../categories/entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class FixturesService {
  constructor(
    private readonly productService: ProductsService,
    private readonly categoriesService: CategoriesService,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async runFixture() {
    try {
      this.removeDataTables();
      const categories = await this.insertCategories();
      this.insertProducts(categories);
      return 'Executed Success';
    } catch (error) {
      throw error;
    }
  }

  private async removeDataTables() {
    await this.productService.removeAllProducts();
    await this.categoriesService.removeAllCategories();
  }

  private async insertCategories() {
    const categories = await this.categoryRepository.create(
      INITIAL_DATA.categories,
    );
    return await this.categoryRepository.save(categories);
  }

  private async insertProducts(categories: Category[]) {
    const products = INITIAL_DATA.products.map((product) => {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];

      return {
        ...product,
        category: randomCategory,
      };
    });
    const productInsert = await this.productRepository.create(products);
    await this.productRepository.save(productInsert);
  }
}
