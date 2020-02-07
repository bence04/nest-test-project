import { Controller, Get, Req, Post, Put, Delete, Param, Body, Query, HttpStatus } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateTestDto, TestDto } from 'src/api/models/test.dto';
import { FilterDto } from 'src/api/models/filter.dto';
import { TestService } from 'src/api/services/test.service';

@ApiTags('test')
@Controller('test')
export class TestController {
    constructor(private testService: TestService) { }

    @Post()
    create(@Body() createTestDto: CreateTestDto): HttpStatus {
        return this.testService.create(createTestDto);
    }

    @Get()
    findAll(@Query() query: FilterDto): TestDto[] {
        return this.testService.findAll();
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
