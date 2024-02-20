import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {Piece, pieceSchema} from "../schemas/piece.schema";
import {PieceController} from "./piece.controller";
import {PieceService} from "./piece.service";

@Module({
    providers: [PieceService],
    controllers: [PieceController],
    imports: [
        MongooseModule.forFeature([
            {name: Piece.name, schema: pieceSchema}
        ])
    ]
})
export class PiecesModule{

}