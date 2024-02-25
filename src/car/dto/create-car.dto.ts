import {
     IsNotEmpty,
     IsUUID,
     IsNumber,
     IsPositive,
     IsEnum,
     IsString,
     Max, Min, MaxLength
} from 'class-validator';
import {CarKindOfWorkEnum, CarMotorEnum} from "../../enums/enum.car";
import {v4 as uuid} from "uuid";
export class CreateCarDto{
     @IsUUID()
     readonly id: string = uuid()
     @IsNotEmpty()
     mark: string
     @IsNotEmpty()
     model: string
     @IsNumber()
     @IsPositive()
     @Max(2024)
     @Min(1905)
     year: number
     @IsNotEmpty()
     @MaxLength(17)
     VIN: string
     @IsEnum({CarMotorEnum})
     motor: CarMotorEnum
     @IsString()
     @IsNotEmpty()
     kindOfWork: CarKindOfWorkEnum
}
