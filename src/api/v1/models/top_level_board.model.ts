import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TopLevelBoard {
  @PrimaryGeneratedColumn("uuid")
  id: string;

}
