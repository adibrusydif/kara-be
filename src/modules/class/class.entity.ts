import { Column, Entity, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { AbstractBaseEntity } from 'src/typeorm/baseEntity';
import { Schedule } from './schedule.entity';

@Entity()
export class Class extends AbstractBaseEntity {
  @Column({
    nullable: false,
  })
  name: string;

  @OneToMany(() => Schedule, (s) => s.class_id)
  schedule: Schedule[];
}