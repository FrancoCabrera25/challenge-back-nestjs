import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductSize } from '../enums/product-size.enum';
import { Category } from '../../categories/entities/category.entity';
import { generateUUID } from 'src/shared/custom-generate-uuid';

@Entity()
export class Product {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 30, unique: true })
  code: string;
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'float', default: 0 })
  price: number;

  @Column({
    type: 'enum',
    enum: ProductSize,
  })
  size: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  'created_at': Date;
  @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  'updated_at': Date;

  @BeforeInsert()
  generateId() {
    this.id = generateUUID();
  }
}
