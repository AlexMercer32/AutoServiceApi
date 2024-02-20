import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Piece, PieceDocument} from "../schemas/piece.schema";
import {UpdatePieceDto} from "./dto/update-piece.dto";
import {CreatePieceDto} from "./dto/create-piece.dto";

@Injectable()
export class PieceService {
    constructor(@InjectModel(Piece.name) private pieceModel: Model<PieceDocument>) {
    }
    async getAll():Promise<Piece[]>{
        return this.pieceModel.find().exec();
    }

    async getById(id: string): Promise<Piece> {
        return this.pieceModel.findById(id);
    }

    async create(pieceDto: CreatePieceDto): Promise<Piece> {
        const newPiece = new this.pieceModel(pieceDto);
        return newPiece.save();
    }

    async remove(id: string): Promise<Piece> {
        return this.pieceModel.findByIdAndDelete(id);
    }

    async update(id: string, pieceDto: UpdatePieceDto): Promise<Piece> {
        return this.pieceModel.findByIdAndUpdate(id, pieceDto, {new: true});
    }
}