import { Column, Entity, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { AbstractBaseEntity } from 'src/typeorm/baseEntity';
import { Schedule } from '../class/schedule.entity';
import { Profile } from '../user/profile.entity';

@Entity()
export class Attendance extends AbstractBaseEntity {
  @Column({
    nullable: false,
  })
  profile_id: number;

  @Column({
    nullable: false,
  })
  schedule_id: number;

  @Column({
    nullable: true,
    type: 'timestamp'
  })
  time: Date;

  @ManyToOne(() => Schedule, (s) => s.attendance, {
    cascade: true,
  })
  @JoinColumn({
    name: 'schedule_id',
  })
  schedule: Schedule;

  @OneToOne(() => Profile)
  @JoinColumn({
    name: "profile_id",
  })
  profile: Profile
}
