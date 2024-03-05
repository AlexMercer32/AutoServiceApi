import {IsEnum, IsInt, IsNotEmpty, IsString, IsUUID, Max, Min} from "class-validator";
import {ExperienceMechanicEnum, PricePerHourEnum, QualityOfWorkEnum} from "../../enums/enum.mechanic";

export class UpdateMechanicDto{
    @IsUUID()
    readonly id: string
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    surname: string
    @IsEnum(ExperienceMechanicEnum)
    @IsNotEmpty()
    experience: ExperienceMechanicEnum
    @Max(70)
    @Min(18)
    @IsNotEmpty()
    @IsInt()
    age: number
    @IsEnum(QualityOfWorkEnum)
    @IsNotEmpty()
    qualityOfWork: QualityOfWorkEnum
    @IsNotEmpty()
    @IsEnum(PricePerHourEnum)
    pricePerHour: PricePerHourEnum
    @IsString()
    @IsNotEmpty()
    carInWork: string
}
