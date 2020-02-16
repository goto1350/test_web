import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleController } from './sample/sample.controller';
import { SampleService } from './sample/sample.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'pass',
      database:'dev_test_webapp_db',
      entities:[],
      synchronize:true,
    })
  ],
  controllers: [AppController, SampleController],
  providers: [AppService, SampleService],
})
export class AppModule {}