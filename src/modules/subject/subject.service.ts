import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { CreateSubjectDto } from './subject.dto';
import { Subject } from './subject.entity';


@Injectable()

export class SubjectService {
    constructor(
        @InjectRepository(Subject)
        private readonly subjectRepository: Repository<Subject>,
    ) { }
    async createSubject(createSubjectDto: CreateSubjectDto) {
        const subjectCreate = await this.subjectRepository.createQueryBuilder()
            .insert().into(Subject).values(createSubjectDto).execute()

        return {
            message: 'success',
            statusCode: 200,
            data: {
                id: subjectCreate.identifiers[0].id,
                name: createSubjectDto.name
            }
        }
    }

    async findAll(){
        const subjects = await this.subjectRepository.createQueryBuilder('subject')
        .select([
            'subject.id',
            'subject.name'
        ]).getMany()
        return {
            message: 'success',
            statusCode: 200,
            data: subjects,
        };
    }

    remove(id: number) {
        this.subjectRepository.createQueryBuilder()
            .delete()
            .from(Subject)
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