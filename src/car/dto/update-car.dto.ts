import {
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsPositive,
    IsString,
    IsUUID,
    MaxDate,
    MaxLength,
    MinDate,
    MinLength
} from "class-validator";
import {CarKindOfWorkEnum, CarMotorEnum} from "../../enums/enum.car";

export class UpdateCarDto {
    @IsUUID()
    readonly id: string
    @IsNotEmpty()
    @IsString()
    mark: string
    @IsString()
    @IsNotEmpty()
    model: string
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @MaxDate(new Date())
    @MinDate(new Date(1940))
    year: number
    @IsNotEmpty()
    @IsString()
    @MinLength(17)
    @MaxLength(17)
    VIN: string
    @IsEnum(CarMotorEnum)
    @IsNotEmpty()
    motor: CarMotorEnum
    @IsEnum(CarKindOfWorkEnum)
    @IsNotEmpty()
    kindOfWork: CarKindOfWorkEnum
}
