import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { User } from './user.entity'
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
var bcrypt = require('bcryptjs');


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Profile)
        private readonly profilerRepository: Repository<Profile>,
    ) { }
    async create(createUserDto: CreateUserDto) {
        const profileDefault = {
            nim: null,
            name: null,
            phone: null,
            address: null,
            school: null,
            birthdate: null,
            class_id: null,
        };

        try {
            // Create the profile
            const profile = this.profilerRepository.create(profileDefault);
            const savedProfile = await this.profilerRepository.save(profile);

            // Create the user with the hashed password and associated profile
            const user = this.userRepository.create({
                ...createUserDto,
                password: await bcrypt.hash(createUserDto.password, 10),
                profile: savedProfile,
            });
            const savedUser = await this.userRepository.save(user);

            return {
                message: 'success',
                statusCode: 200,
                data: {
                    id: savedUser.id,
                },
            };
        } catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Could not create user');
        }
    }

    async findAll() {
        const users = await this.userRepository.createQueryBuilder('user')
            .innerJoinAndSelect('user.profile', 'profile')
            .select([
                'user.id',
                'user.email',
                'user.role',
                'profile'
            ])
            .getMany()
        return {
            message: 'success',
            statusCode: 200,
            data: users,
        };
    }

    async findOne(id: number) {
        const user = await this.userRepository.createQueryBuilder('user')
            .where('user.id = :id', { id })
            .innerJoinAndSelect('user.profile', 'profile')
            .select([
                'user.id',
                'user.email',
                'user.role',
                'profile'
            ])
            .getOne()

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return {
            message: 'success',
            statusCode: 200,
            data: user,
        };
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const existingUser = await this.userRepository.findOne({
            where: {
                id: id,
            },
            relations: ['profile']
        });
        const existingProfile = await this.profilerRepository.findOne({
            where: {
                id: existingUser.profile.id,
            },
        });

        Object.assign(existingProfile, updateUserDto);
        const updated = await this.profilerRepository.save(existingProfile);


        return {
            message: 'success',
            statusCode: 200,
            data: updated,
        };
    }

    remove(id: number) {
        this.userRepository.createQueryBuilder()
            .delete()
            .from(User)
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

    findUsersByEmail(email: string) {
        return this.userRepository.findOne({ where: { email: email } });
    }

    async findListStudent(filter: string) {
        const students = await this.userRepository.createQueryBuilder('user')
            .innerJoin('user.profile', 'profile')
            .select([
                'user.id',
                'user.email',
                'user.role',
                'profile'
            ])
            .where(`role = :role`, { role: filter })
            .getMany()
        return {
            message: 'success',
            statusCode: 200,
            data: students,
        };
    }

    updateUserClass(ids: any, class_id: any) {
        const update = this.profilerRepository.createQueryBuilder().update(Profile).set({ class_id: class_id })
            .where("id IN (:...ids)", { ids: ids })
            .execute();
        return update
    }
}