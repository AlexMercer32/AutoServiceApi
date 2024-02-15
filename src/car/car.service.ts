import {Injectable} from "@nestjs/common";
import {CreateCarDto} from "./dto/create-car.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Car, CarDocument} from "./schemas/car.schema";
import {UpdateCarDto} from "./dto/update-car.dto";
import { Model } from "mongoose";


@Injectable()
export class CarService{
    constructor(@InjectModel(Car.name) private carModel : Model<CarDocument>) {}


    async getAll() : Promise<Car[]> {
        return this.carModel.find().exec()
    }

    async getById(id : string) :Promise<Car> {
        return this.carModel.findById(id);
    }

    async create(carDto :CreateCarDto) {
        const newCar = new this.carModel(carDto)
        return newCar.save()
    }
    async remove(id: string) :Promise<Car> {
        return this.carModel.findByIdAndDelete(id)
    }

    async update(id: string, carDto: UpdateCarDto) :Promise<Car>{
        return this.carModel.findByIdAndUpdate(id, carDto, {new: true})
    }
}