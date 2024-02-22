import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'
import {CarMotorEnum} from "../enums/enum.car";
export type CarDocument = Car & Document;
@Schema()
export class Car {
    @Prop()
    mark: string

    @Prop()
    model: string

    @Prop()
    year: number

    @Prop()
    VIN: string

    @Prop()
    motor: CarMotorEnum

    @Prop()
    kindOfWork: string
}
export const carSchema = SchemaFactory.createForClass(Car);