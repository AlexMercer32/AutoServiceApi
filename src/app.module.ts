import {MongooseModule} from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CarsModule} from "./car/cars.module";
import {MechanicModule} from "./mechanic/mechanic.module";
import {PiecesModule} from "./Piece/pieces.module";
import * as process from "process";



@Module({
  imports: [ConfigModule.forRoot({
      envFilePath: 'config.env',
  }),
      PiecesModule,
      MechanicModule,
      CarsModule,
      MongooseModule.forRoot(process.env.MONGODBURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
