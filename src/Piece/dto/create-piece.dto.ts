import {PieceCategoryEnum} from "../../enums/enum.piece";
import { v4 as uuid } from "uuid";
import {IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID} from "class-validator";
export class CreatePieceDto{
    @IsUUID()
    readonly id: string = uuid();
    @IsNumber()
    number: string
    @IsEnum(PieceCategoryEnum)
    category: PieceCategoryEnum
    @IsNotEmpty()
    @IsString()
    description: string
}