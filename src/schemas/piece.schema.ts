import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {category} from "../enums/enum.piece";
export type PieceDocument = Piece & Document;
@Schema()
export class Piece{
    @Prop()
    number: string
    @Prop()
    Category:category
    @Prop()
    description:string
}
export const pieceSchema = SchemaFactory.createForClass(Piece);