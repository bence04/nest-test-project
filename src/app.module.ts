import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared/shared.module';

@Module({
  imports: [ApiModule, AdminModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [SharedModule]
})
export class AppModule {}
