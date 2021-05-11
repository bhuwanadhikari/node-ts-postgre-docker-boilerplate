import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  // OneToMany,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;
}
