import { Column, Entity, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { AbstractBaseEntity } from 'src/typeorm/baseEntity';
import { Attendance } from '../attendance/attendance.entity';
import { Profile } from '../user/profile.entity';
import { Class } from './class.entity';
import { Subject } from '../subject/subject.entity';

@Entity()
export class Schedule extends AbstractBaseEntity {
  @Column({
    nullable: true,
    type: 'timestamp'
  })
  start_time: Date;

  @Column({
    nullable: true,
    type: 'timestamp'
  })
  end_time: Date;

  @Column({
    nullable: false,
  })
  class_id: number;

  @Column({
    nullable: false,
  })
  subject_id: string;

  @Column({
    nullable: false,
  })
  teacher_id: number;

  @Column({
    nullable: false,
  })
  room: string;

  @Column({
    nullable: false,
  })
  info: string;

  @ManyToOne(() => Class, (c) => c.schedule, {
    cascade: true,
  })
  @JoinColumn({
    name: 'class_id',
  })
  class: Class;

  @ManyToOne(() => Profile, (p) => p.id, {
    cascade: true,
  })
  @JoinColumn({
    name: "teacher_id",
  })
  teacher: Profile

  @OneToMany(() => Attendance, (a) => a.schedule_id)
  attendance: Attendance[];

  @ManyToOne(() => Subject, (s) => s.id, {
    cascade: true,
  })
  @JoinColumn({
    name: 'subject_id',
  })
  subject: Subject;
}