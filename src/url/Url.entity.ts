import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @Column({ default: false })
  isDeleted: boolean;

  @Column()
  originalLink: string;

  @Index()
  @Column()
  stub: string;

  @Column({ nullable: true, type: 'timestamp' })
  expiryDate: Date;
}
