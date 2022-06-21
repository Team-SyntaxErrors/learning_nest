import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: true })
  status: boolean;

}
