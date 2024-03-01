import {
    Body,
    Controller,
    Delete,
    Get,
    Param, ParseEnumPipe,
    ParseIntPipe,
    ParseUUIDPipe,
    Post,
    Put,
    ValidationPipe
} from "@nestjs/common";
import {PieceService} from "./piece.service";
import {CreatePieceDto} from "./dto/create-piece.dto";
import {Piece} from "../schemas/piece.schema";
import {UpdatePieceDto} from "./dto/update-piece.dto";
import {isUUID} from "class-validator";
import {PieceCategoryEnum} from "../enums/enum.piece";

@Controller('piece')
export class PieceController{
    constructor(private pieceService: PieceService) {
    }
    @Get()
    getAll():Promise<Piece[]>{
        return this.pieceService.getAll();
    }
@Get(':id')
    getOne(@Param('id', new ParseUUIDPipe(), new ParseEnumPipe(PieceCategoryEnum)) id : string):Promise<Piece>{
        return this.pieceService.getById(id);
}
@Post()
    create(@Body() createPieceDto : CreatePieceDto): Promise<Piece>{
        return this.pieceService.create(createPieceDto);
}
@Delete(':id')
    remove(@Param('id', new ParseUUIDPipe(), new ParseEnumPipe(PieceCategoryEnum)) id:string):Promise<Piece>{
        return this.pieceService.remove(id);
}
@Put(':id')
    update(@Body() updatePieceDto:UpdatePieceDto, @Param('id', new ParseUUIDPipe(), new ParseEnumPipe(PieceCategoryEnum))id:string):Promise<Piece>{
        return this.pieceService.update(id, updatePieceDto);
}

}
