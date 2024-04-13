import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = this.categoryRepository.create(createCategoryDto);

      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocurrio un error al crear la categoria',
      );
    }
  }

  async findAll() {
    const categories = await this.categoryRepository.find({});

    if (categories.length !== 0) return categories;

    throw new NotFoundException(`Category not found `);
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findOneBy({ id });

    if (category) return category;

    throw new NotFoundException(`Category with id: ${id} not found `);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.preload({
      id,
      ...updateCategoryDto,
    });

    if (category) {
      return await this.categoryRepository.save(category);
    }

    throw new NotFoundException(`Category with id: ${id} not found `);
  }

  async removeAllCategories() {
    const query = this.categoryRepository.createQueryBuilder('category');
    return await query.delete().where({}).execute();
  }
}
