import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../user/profile.entity';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { ClassController } from './class.controller';
import { Class } from './class.entity';
import { ClassService } from './class.service';
import { Schedule } from './schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Class, Schedule, User, Profile])],
  controllers: [ClassController],
  providers: [ClassService, UserService],
  exports: [ClassService],
})
export class ClassModule {}