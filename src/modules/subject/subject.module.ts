import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from '../class/schedule.entity';
import { SubjectController } from './subject.controller';
import { Subject } from './subject.entity';
import { SubjectService } from './subject.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Schedule])],
  controllers: [SubjectController],
  providers: [SubjectService],
  exports: [SubjectService],
})
export class SubjectModule {}