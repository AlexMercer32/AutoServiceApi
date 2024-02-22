import {IsNotEmpty, IsEmail, IsUUID, IsNumber, IsPositive, IsOptional, IsDate, IsEnum, IsString} from 'class-validator';
import {CarMotorEnum} from "../../enums/enum.car";
import {v4 as uuid, validate} from "uuid";
export class CreateCarDto{
     @IsUUID()
     id: string = uuid()
     @IsNotEmpty()
     mark: string
     @IsNotEmpty()
     model: string
     @IsNumber()
     @IsPositive()
     year: number
     @IsNotEmpty()
     VIN: string
     @IsEnum({CarMotorEnum})
     motor: CarMotorEnum
     @IsString()
     kindOfWork: string
}
