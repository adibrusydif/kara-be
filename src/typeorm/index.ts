import { AbstractBaseEntity } from './baseEntity';
import { User } from 'src/modules/user/user.entity';
import { Class } from 'src/modules/class/class.entity';
import { Attendance } from 'src/modules/attendance/attendance.entity';
import { Module } from 'src/modules/module/module.entity';
import { Profile } from 'src/modules/user/profile.entity';
import { Schedule } from 'src/modules/class/schedule.entity';
import { Subject } from 'src/modules/subject/subject.entity';

const entities = [
  User,
  Profile,
  Class,
  Schedule,
  Attendance,
  Module,
  Subject
];

export {
  AbstractBaseEntity,
  User,
  Profile,
  Class,
  Schedule,
  Attendance,
  Module,
  Subject
};
export default entities;
