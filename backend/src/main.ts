import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import router from './routes';

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});