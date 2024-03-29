import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateMechanicDto} from "./dto/create-mechanic-dto";
import {UpdateMechanicDto} from "./dto/update-mechanic-dto";
import {Mechanic, MechanicDocument} from "../schemas/mechanic.schema";

@Injectable()
export class MechanicService{
    constructor(@InjectModel(Mechanic.name) private mechanicModel:Model<MechanicDocument>) {

    }
    async getAllMechanics():Promise<Mechanic[]>{
        return this.mechanicModel.find().exec();
    }
    async getByIdMechanics(id:string):Promise<Mechanic>{
        return this.mechanicModel.findById(id);
    }
    async createMechanic(mechanicDto:CreateMechanicDto):Promise<Mechanic>{
        const newMechanic = new this.mechanicModel(mechanicDto);
        return newMechanic.save();
    }
    async removeMechanic(id:string):Promise<Mechanic>{
        return this.mechanicModel.findByIdAndDelete(id);
    }
    async updateMechanic(id:string, mechanicDto:UpdateMechanicDto):Promise<Mechanic>{
        return this.mechanicModel.findByIdAndUpdate(id, mechanicDto,{new:true});
    }
}