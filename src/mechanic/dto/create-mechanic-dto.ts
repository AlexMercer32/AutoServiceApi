import {ExperienceMechanicEnum, PricePerHourEnum, QualityOfWorkEnum} from "../../enums/enum.mechanic";
import { v4 as uuid } from "uuid";
import {IsEnum, IsNotEmpty, IsString, IsUUID, Max, Min} from "class-validator";
export class CreateMechanicDto{
    @IsUUID()
    readonly id: string = uuid();
    @IsString()
    name: string
    @IsString()
    surname: string
    @IsEnum(ExperienceMechanicEnum)
    @IsNotEmpty()
    experience: ExperienceMechanicEnum
    @Max(70)
    @Min(18)
    age: number
    @IsEnum(QualityOfWorkEnum)
    qualityOfWork: QualityOfWorkEnum
    @IsEnum(PricePerHourEnum)
    pricePerHour: PricePerHourEnum
    @IsString()
    @IsNotEmpty()
    carInWork: string
}
