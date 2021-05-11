import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  // OneToMany,
  UpdateDateColumn,
} from "typeorm";
//   import { Post } from "./post";
//   import { Comment } from "./comment";

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
