import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {ExperienceMechanicEnum, PricePerHourEnum, QualityOfWorkEnum} from "../enums/enum.mechanic";
export type MechanicDocument = Mechanic & Document;
@Schema()
export class Mechanic{
    @Prop()
    name:string
    @Prop()
    surname:string
    @Prop()
    experience:ExperienceMechanicEnum
    @Prop()
    age:number
    @Prop()
    qualityOfWork:QualityOfWorkEnum
    @Prop()
    pricePerHour:PricePerHourEnum
    @Prop()
    carInWork:string
}
export const mechanicSchema = SchemaFactory.createForClass(Mechanic);