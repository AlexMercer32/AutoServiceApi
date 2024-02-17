import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
export type MechanicDocument = Mechanic & Document;
@Schema()
export class Mechanic{
    @Prop()
    name:string
    @Prop()
    surname:string
    @Prop()
    experience:string
    @Prop()
    age:number
    @Prop()
    qualityOfWork:string
    @Prop()
    pricePerHour:number
    @Prop()
    carInWork:string
}
export const mechanicSchema = SchemaFactory.createForClass(Mechanic);