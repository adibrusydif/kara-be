import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Schedule } from './schedule.entity';
import { CreateScheduleDto } from './class.dto';


@Injectable()

export class ScheduleService {
    constructor(
        @InjectRepository(Schedule)
        private readonly scheduleRepository: Repository<Schedule>,
    ) { }
    async createSchedule(createScheduleDto: CreateScheduleDto) {
        const scheduleCreate = await this.scheduleRepository.createQueryBuilder()
            .insert().into(Schedule).values(createScheduleDto).execute()

        return {
            message: 'success',
            statusCode: 200,
            data: createScheduleDto
        }
    }

    async findAll(){
        const subjects = await this.scheduleRepository.createQueryBuilder('subject')
        .select().getMany()
        return {
            message: 'success',
            statusCode: 200,
            data: subjects,
        };
    }

    remove(id: number) {
        this.scheduleRepository.createQueryBuilder()
            .delete()
            .from(Schedule)
            .where(`id = :id`, { id })
            .execute();
        return {
            message: 'success',
            statusCode: 200,
            data: {
                id: id,
            },
        };
    }
}