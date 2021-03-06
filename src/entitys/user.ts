import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'orm' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'firstName', length: 255 })
  firstName: string;

  @Column('varchar', { name: 'lastName', length: 255 })
  lastName: string;

  @Column('int', { name: 'age' })
  age: number;

  @Column('varchar', { name: 'createTime', length: 255 })
  createTime: string;
}
