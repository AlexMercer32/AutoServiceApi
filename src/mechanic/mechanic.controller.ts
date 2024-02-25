import {MechanicService} from "./mechanic.service";
import {Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe} from "@nestjs/common";
import {CreateMechanicDto} from "./dto/create-mechanic-dto";
import {UpdateMechanicDto} from "./dto/update-mechanic-dto";
import {Mechanic} from "../schemas/mechanic.schema";
@Controller('mechanic')
export class MechanicController{

    constructor(private mechanicService: MechanicService) {
    }
    @Get()
    getAllMechanics(): Promise<Mechanic[]>{
        return this.mechanicService.getAllMechanics();
    }
    @Get(':id')
    getOneMechanic(@Param('id') id:string) :Promise<Mechanic>{
        return this.mechanicService.getByIdMechanics(id);
    }
    @Post()
    createMechanic(@Body(ValidationPipe) createMechanicDto: CreateMechanicDto) :Promise<Mechanic>{
        return this.mechanicService.createMechanic(createMechanicDto);
    }
    @Delete(':id')
    removeMechanic(@Param('id') id:string) :Promise<Mechanic>{
        return this.mechanicService.removeMechanic(id);
    }
    @Put(':id')
    update(@Body(ValidationPipe) updateMechanicDto : UpdateMechanicDto , @Param('id') id: string):Promise<Mechanic>{
        return this.mechanicService.updateMechanic(id, updateMechanicDto);
    }
}
