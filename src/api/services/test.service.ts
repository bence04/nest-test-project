import { Injectable, HttpStatus } from '@nestjs/common';
import { TestDto, CreateTestDto } from './../models/test.dto';

@Injectable()
export class TestService {
    private readonly tests: TestDto[] = [];

    create(test: CreateTestDto) {
        this.tests.push(test);
        return HttpStatus.CREATED;
    }

    findAll(): TestDto[] {
        return this.tests;
    }
}