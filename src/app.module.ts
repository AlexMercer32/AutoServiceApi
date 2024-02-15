import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CarsModule} from "./car/cars.module";
import {MongooseModule} from "@nestjs/mongoose";



@Module({
  imports: [
      CarsModule,
      MongooseModule.forRoot('mongodb+srv://shurganovalex:yxvQb4xsVIcAMX7r@alexmercer.nhguebu.mongodb.net/Service')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
