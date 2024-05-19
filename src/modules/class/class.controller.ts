import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateClassDto, updateBulkClass } from './class.dto';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
    constructor(private readonly classService: ClassService) { }

    @Post("create")
    create(@Body() createClassDto: CreateClassDto) {
        return this.classService.createClass(createClassDto);
    }
    @Patch("assign")
    assign(@Body() updateBulkClass: updateBulkClass) {
        return this.classService.updateClasstoBulkUser(updateBulkClass);
    }

    @Get(':id/students')
    findStudentClass(@Param('id') id: string) {
        return this.classService.getClassStudents(id);
    }

    @Get('list')
    getClassList() {
        return this.classService.getListClass();
    }
}
