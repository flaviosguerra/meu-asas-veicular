import { Vehicle } from "../entities/vehicle.entity";
import { VehicleRepository } from "../interfaces/vehicle.repository";
import { supabase } from "../infrastructure/supabase";

export class SearchVehicleRepository implements VehicleRepository {
    async findByPlate(plate: string): Promise<Vehicle | null> {
        try {
            const { data: vehicle, error } = await supabase
                .from('veiculos')
                .select('*')
                .eq('placa', plate)
                .single();

            if (error || !vehicle) {
                return null;
            }

            return Vehicle.create(
                vehicle.id,
                vehicle.placa,
                vehicle.modelo,
                vehicle.marca,
                vehicle.ano,
                vehicle.cor
            );
        } catch (error) {
            console.error('Erro ao buscar veículo:', error);
            return null;
        }
    }
}