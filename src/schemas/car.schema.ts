import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'
import {markDE, markJP, markUS, motor} from "../enums/enum.car";
export type CarDocument = Car & Document;
@Schema()
export class Car {
    @Prop()
    mark:[markDE,markJP,markUS]

    @Prop()
    model: string

    @Prop()
    year: number

    @Prop()
    VIN: string

    @Prop()
    motor: motor

    @Prop()
    kindOfWork: string
}
export const carSchema = SchemaFactory.createForClass(Car);