import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { PieceCategoryEnum} from "../enums/enum.piece";
export type PieceDocument = Piece & Document;
@Schema()
export class Piece{
    @Prop()
    number: string
    @Prop()
    category:PieceCategoryEnum
    @Prop()
    description:string
}
export const pieceSchema = SchemaFactory.createForClass(Piece);