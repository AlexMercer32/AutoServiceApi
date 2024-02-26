import {PieceCategoryEnum} from "../../enums/enum.piece";
import {IsEnum, IsInt, IsNotEmpty, IsPositive, IsString, IsUUID} from "class-validator";
export class CreatePieceDto{
    @IsUUID()
    readonly id: string
    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    number: string
    @IsEnum(PieceCategoryEnum)
    @IsNotEmpty()
    category: PieceCategoryEnum
    @IsNotEmpty()
    @IsString()
    description: string
}
