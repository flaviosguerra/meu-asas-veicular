import { Vehicle } from "../entities/vehicle.entity";

export interface VehicleRepository {
    /**
     * Busca um veículo pela placa
     * @param plate - Placa do veículo (sempre string única, nunca array)
     * @returns Vehicle encontrado ou null se não existir
     */
    findByPlate(plate: string): Promise<Vehicle | null>;
}