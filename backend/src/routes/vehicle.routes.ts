import { Router } from 'express';
import { VehicleController } from '../controllers/vehicle.controller';

const router = Router();
const vehicleController = new VehicleController();

// GET /vehicles/search/:plate - Consultar veículo por placa
router.get('/search/:plate', (req, res) => vehicleController.searchByPlate(req, res));

export default router;