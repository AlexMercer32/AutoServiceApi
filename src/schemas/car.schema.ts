import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'
import {CarKindOfWorkEnum, CarMotorEnum} from "../enums/enum.car";
export type CarDocument = Car & Document;
@Schema()
export class Car {
    @Prop()
    mark: string

    @Prop()
    model: string

    @Prop(new Date().getFullYear())
    year: number

    @Prop({
        maxlength:17,
        unique:true,
        minlength:17,
    })
    VIN: string

    @Prop({
        enum:[CarMotorEnum]
    })
    motor: CarMotorEnum

    @Prop({
        enum:[CarKindOfWorkEnum]
    })
    kindOfWork: CarKindOfWorkEnum
}
export const carSchema = SchemaFactory.createForClass(Car);
