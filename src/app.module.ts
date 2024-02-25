import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CarsModule} from "./car/cars.module";
import {MechanicModule} from "./mechanic/mechanic.module";
import {PiecesModule} from "./Piece/pieces.module";
@Module({
  imports: [ConfigModule.forRoot(),
      PiecesModule,
      MechanicModule,
      CarsModule,
      MongooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) => ({
              uri: config.get<string>('MONGODB_URI'),
          })
      })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
