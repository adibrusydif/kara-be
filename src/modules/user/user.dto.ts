import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  role: string;
}

export class UpdateUserDto {
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    nim: string;
  
    @IsNotEmpty()
    phone: string;
  
    @IsNotEmpty()
    school: string;
  
    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    birthdate: Date;

    parent_phone: string;
    parent_name: string;
    gender: string;
    height: string;
  }