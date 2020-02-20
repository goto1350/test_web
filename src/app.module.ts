import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleController } from './sample/sample.controller';
import { SampleService } from './sample/sample.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { User} from  './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'pass',
      database:'dev_test_webapp_db',
      entities:[User],
      synchronize:true,
    }),
    UsersModule
  ],
  controllers: [AppController, SampleController, UsersController],
  providers: [AppService, SampleService, UsersService],
})
export class AppModule {}
