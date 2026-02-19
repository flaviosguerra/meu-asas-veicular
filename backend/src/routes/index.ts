import { Router } from 'express';
import vehicleRoutes from './vehicle.routes';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API Meu Asas Veicular funcionando',
    timestamp: new Date().toISOString(),
  });
});

router.use('/vehicles', vehicleRoutes);

export default router;