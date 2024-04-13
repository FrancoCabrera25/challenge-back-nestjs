import { Module } from '@nestjs/common';
import { FixturesService } from './fixtures.service';
import { FixturesController } from './fixtures.controller';
import { ProductsModule } from '../products/products.module';
import { CategoriesModule } from '../categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Product } from '../products/entities/product.entity';

@Module({
  controllers: [FixturesController],
  providers: [FixturesService],
  imports: [
    ProductsModule,
    CategoriesModule,
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([Product]),
  ],
})
export class FixturesModule {}
