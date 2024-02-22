import { CarMotorEnum } from "src/enums/enum.car"
import { v4 as uuid } from "uuid";
import {IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID} from "class-validator";
export class UpdateCarDto{
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
