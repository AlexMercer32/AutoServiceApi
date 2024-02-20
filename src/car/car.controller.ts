import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {CreateCarDto} from "./dto/create-car.dto";
import {UpdateCarDto} from "./dto/update-car.dto";
import {CarService} from "./car.service";
import {Car} from "../schemas/car.schema";

@Controller('car')
export class CarController {
    constructor(private carService: CarService) {
    }
    @Get()
    @HttpCode(HttpStatus.OK)
    getAll() :Promise<Car[]>{
        return this.carService.getAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    getOne(@Param('id') id :string):Promise<Car>  {
        return this.carService.getById(id);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCarDto: CreateCarDto) :Promise<Car> {
        return this.carService.create(createCarDto);
    }
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id : string) :Promise<Car> {
          return this.carService.remove(id);
    }
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Body() updateCarDto: UpdateCarDto, @Param('id') id : string):Promise<Car>{
         return this.carService.update(id , updateCarDto);
    }
}
