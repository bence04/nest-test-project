import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ApiModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
