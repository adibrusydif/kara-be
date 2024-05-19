import { Column, Entity, OneToMany} from 'typeorm';
import { AbstractBaseEntity } from 'src/typeorm/baseEntity';
import { Schedule } from '../class/schedule.entity';

@Entity()
export class Subject extends AbstractBaseEntity {
  @Column({
    nullable: false,
  })
  name: string;
  
  @OneToMany(() => Schedule, (s) => s.subject)
  schedule: Schedule[];
}