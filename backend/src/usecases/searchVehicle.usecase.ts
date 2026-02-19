
import { Vehicle } from "../entities/vehicle.entity";
import { VehicleRepository } from "../interfaces/vehicle.repository";

interface VehicleRequest {
    plate: string;
}

export class SearchVehicleByPlateUseCase {
    constructor(private vehicleRepository: VehicleRepository) {}

    async execute(request: VehicleRequest): Promise<Vehicle> {
        if (!request.plate || typeof request.plate !== 'string') {
            throw new Error('Placa deve ser uma string válida.');
        }
        
        const vehicle = await this.vehicleRepository.findByPlate(request.plate);
        
        if (!vehicle) {
            throw new Error('Veículo não encontrado.');
        }
        return vehicle;
    }
}