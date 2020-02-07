import { Module } from '@nestjs/common';
import { TestController } from './controllers/test/test.controller';

@Module({
    imports: [],
    controllers: [TestController],
    providers: [],
})
export class ApiModule { }
