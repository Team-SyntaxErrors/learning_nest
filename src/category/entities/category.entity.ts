import { Entity ,  Column, PrimaryGeneratedColumn } from "typeorm";

 @Entity('categories')
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: true })
  status: boolean;

}
