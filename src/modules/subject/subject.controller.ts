import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateSubjectDto } from './subject.dto';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
    constructor(private readonly subjectService: SubjectService) { }

    @Post("create")
    create(@Body() createSubjectDto: CreateSubjectDto) {
        return this.subjectService.createSubject(createSubjectDto);
    }
    @Get("list")
    getSubject() {
        return this.subjectService.findAll();
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.subjectService.remove(+id);
    }
}