import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateScheduleDto } from './class.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) { }

    @Post("create")
    create(@Body() createScheduleDto: CreateScheduleDto) {
        return this.scheduleService.createSchedule(createScheduleDto);
    }
    @Get("list")
    getSubject() {
        return this.scheduleService.findAll();
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.scheduleService.remove(+id);
    }
}