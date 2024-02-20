import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {experienceMechanic, pricePerHour, qualityOfWork} from "../enums/enum.mechanic";
export type MechanicDocument = Mechanic & Document;
@Schema()
export class Mechanic{
    @Prop()
    name:string
    @Prop()
    surname:string
    @Prop()
    experience:experienceMechanic
    @Prop()
    age:number
    @Prop()
    qualityOfWork:qualityOfWork
    @Prop()
    pricePerHour:pricePerHour
    @Prop()
    carInWork:string
}
export const mechanicSchema = SchemaFactory.createForClass(Mechanic);