import { Module } from '@nestjs/common';
import { TestController } from './controllers/test/test.controller';
import { TestService } from './services/test.service';

@Module({
    imports: [],
    controllers: [TestController],
    providers: [TestService],
})
export class ApiModule { }
