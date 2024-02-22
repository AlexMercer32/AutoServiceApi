import {category} from "../../enums/enum.piece";
import { v4 as uuid } from "uuid";
export class CreatePieceDto{
    id: string = uuid();
    number: string
    category: category
    description: string
}