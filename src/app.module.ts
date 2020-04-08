import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ApiModule, AdminModule, SharedModule,
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
  exports: [SharedModule]
})
export class AppModule {}
