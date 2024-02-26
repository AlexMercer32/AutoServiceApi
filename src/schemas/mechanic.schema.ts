import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {ExperienceMechanicEnum, PricePerHourEnum, QualityOfWorkEnum} from "../enums/enum.mechanic";
export type MechanicDocument = Mechanic & Document;
@Schema()
export class Mechanic{
    @Prop()
    name:string
    @Prop()
    surname:string
    @Prop({
        enum:[ExperienceMechanicEnum]
    })
    experience:ExperienceMechanicEnum
    @Prop({
        max:70,
        min:18,
    })
    age:number
    @Prop({
        enum:[QualityOfWorkEnum]
    })
    qualityOfWork:QualityOfWorkEnum
    @Prop({
        enum:[PricePerHourEnum]
    })
    pricePerHour:PricePerHourEnum
    @Prop()
    carInWork:string
}
export const mechanicSchema = SchemaFactory.createForClass(Mechanic);
