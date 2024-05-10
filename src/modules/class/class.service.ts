import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Class } from './class.entity';
import { Schedule } from './schedule.entity';
import { In, Repository } from 'typeorm';
import { CreateClassDto, updateBulkClass } from './class.dto';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';


@Injectable()

export class ClassService {
    constructor(
        @InjectRepository(Class)
        private readonly classRepository: Repository<Class>,
        @InjectRepository(Schedule)
        private readonly profilerRepository: Repository<Schedule>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private userService: UserService,
    ) { }
    async createClass(createClassDto: CreateClassDto) {
        const classCreate = await this.classRepository.createQueryBuilder()
            .insert().into(Class).values(createClassDto).execute()

        return {
            message: 'success',
            statusCode: 200,
            data: {
                id: classCreate.identifiers[0].id,
                name: createClassDto.name
            }
        }
    }

    findClassByID(id: any) {
        return this.classRepository.findOne({ where: { id: id } });
    }

    async updateClasstoBulkUser(updateBulkClass: updateBulkClass) {
        const students = await this.userRepository.createQueryBuilder('user')
            .innerJoin('user.profile', 'profile')
            .select([
                'user.id',
                'profile'
            ])
            .where("user.id IN (:...ids)", { ids: updateBulkClass.userID })
            .getMany()
        const IDs = students.map((x) => x.profile.id)
        const update = this.userService.updateUserClass(IDs, updateBulkClass.class_id)
        return {
            message: 'success',
            statusCode: 200,
            data: updateBulkClass
        }
    }

    async getClassStudents(id: any) {
        const students = await this.userRepository.createQueryBuilder('user')
            .innerJoin('user.profile', 'profile')
            .select([
                'user.id',
                'profile'
            ])
            .where("profile.class_id = :id", { id })
            .getMany()

        return {
            message: 'success',
            statusCode: 200,
            data: students
        }
    }
}
