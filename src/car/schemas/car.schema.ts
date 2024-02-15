import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'
export type CarDocument = Car & Document;
@Schema()
export class Car {
    @Prop()
    mark: string

    @Prop()
    model: string

    @Prop()
    year: string

    @Prop()
    VIN: string

    @Prop()
    motor: string

    @Prop()
    kindOfWork: string
}
export const carSchema = SchemaFactory.createForClass(Car);