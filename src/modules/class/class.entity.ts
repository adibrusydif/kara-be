import { Column, Entity, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { AbstractBaseEntity } from 'src/typeorm/baseEntity';
import { Schedule } from './schedule.entity';
import { Profile } from '../user/profile.entity';

@Entity()
export class Class extends AbstractBaseEntity {
  @Column({
    nullable: false,
  })
  name: string;

  @OneToMany(() => Profile, profile => profile.class)
    profiles: Profile[];
  
  @OneToMany(() => Schedule, (s) => s.class_id)
  schedule: Schedule[];
}