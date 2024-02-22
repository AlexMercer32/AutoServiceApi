import {experienceMechanic, pricePerHour, qualityOfWork} from "../../enums/enum.mechanic";
import { v4 as uuid } from "uuid";
export class UpdateMechanicDto{
    id: string = uuid();
    name: string
    surname: string
    experience: experienceMechanic
    age: number
    qualityOfWork: qualityOfWork
    pricePerHour: pricePerHour
    carInWork: string
}