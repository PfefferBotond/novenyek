import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class UserData {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  plantName: string;

  @Column()
  plantColor: string;
}
