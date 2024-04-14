import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { generateUUID } from 'src/shared/custom-generate-uuid';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Category {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ApiProperty()
  @Column({ type: 'boolean', default: true })
  active: boolean;

  @ApiProperty()
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  'created_at': Date;
  @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  'updated_at': Date;

  @BeforeInsert()
  generateId() {
    this.id = generateUUID();
  }
}
