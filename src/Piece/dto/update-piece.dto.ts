import {IsEnum, IsInt, IsNotEmpty, IsPositive, IsString, IsUUID} from "class-validator";
import {PieceCategoryEnum} from "../../enums/enum.piece";

export class UpdatePieceDto{
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
