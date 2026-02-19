import { Request, Response } from 'express';
import { SearchVehicleRepository } from '../frameworks/search-vehicle.repository';
import { SearchVehicleByPlateUseCase } from '../usecases/searchVehicle.usecase';

export class VehicleController {
    private searchVehicleUseCase: SearchVehicleByPlateUseCase;

    constructor() {
        const vehicleRepository = new SearchVehicleRepository();
        this.searchVehicleUseCase = new SearchVehicleByPlateUseCase(vehicleRepository);
    }

    async searchByPlate(req: Request, res: Response) {
        try {
            const { plate } = req.params;
            if (!plate || typeof plate !== 'string' || plate.trim() === '') {
                return res.status(400).json({
                    success: false,
                    error: 'Placa é obrigatória',
                });
            }

            const vehicle = await this.searchVehicleUseCase.execute({ 
                plate: plate.toString().toUpperCase().trim()
            });

            return res.status(200).json({
                success: true,
                data: vehicle,
            });
        } catch (error) {
            console.error('Erro na consulta de veículo:', error);

            if (error instanceof Error && error.message === 'Veículo não encontrado.') {
                return res.status(404).json({
                    success: false,
                    error: error.message,
                });
            }

            return res.status(500).json({
                success: false,
                error: 'Erro interno do servidor',
            });
        }
    }
}