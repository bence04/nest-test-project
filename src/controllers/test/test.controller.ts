import { Controller, Get, Req, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { ApiParam } from '@nestjs/swagger';
import { CreateTestDto } from 'src/models/test.dto';
import { FilterDto } from 'src/models/filter.dto';

@Controller('test')
export class TestController {
    constructor(private readonly appService: AppService) { }

    @Post()
    create(@Body() createTestDto: CreateTestDto): string {
        return 'This action adds a new test ' + JSON.stringify(createTestDto);
    }

    @Get()
    findAll(@Query() query: FilterDto): string {
        return 'This action returns all tests';
    }

    @Put(':id')
    @ApiParam({name: 'id', type: String, required: true})
    edit(@Param() params): string {
        return 'This action edit test ' + params.id;
    }

    @Delete(':id')
    @ApiParam({ name: 'id', type: String, required: true })
    delete(@Param() params): string {
        return 'This action delete test ' + params.id;
    }
}
