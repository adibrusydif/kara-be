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