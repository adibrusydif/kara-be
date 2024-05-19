import { IsNotEmpty } from 'class-validator';

export class CreateClassDto {
    @IsNotEmpty()
    name: string;
}

export class updateBulkClass {
    @IsNotEmpty()
    class_id: any;
    @IsNotEmpty()
    userID: Array<any>;
}

export class CreateScheduleDto {
    @IsNotEmpty()
    start_time: Date;
    @IsNotEmpty()
    end_time: Date;
    @IsNotEmpty()
    class_id: number;
    @IsNotEmpty()
    subject_id: string;
    @IsNotEmpty()
    teacher_id: number;
    room: string;
    info: string;
}