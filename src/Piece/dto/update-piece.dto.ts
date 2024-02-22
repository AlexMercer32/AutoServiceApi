import { category } from "src/enums/enum.piece"
import { v4 as uuid } from "uuid";
export class UpdatePieceDto{
    id: string = uuid();
    number: string
    category: category
    description: string
}
