import { Column, Entity } from 'typeorm';
import { AbstractBaseEntity } from 'src/typeorm/baseEntity';

@Entity()
export class Module extends AbstractBaseEntity {
  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  url: string;
}