import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { executarConsulta } from './servicoConsulta';

const app = express();
app.use(cors());
const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Servidor rodando',
  })
});




app.get('/consultar-placa/:placa', async (req, res) => {
  try { 
    const {placa} = req.params;

    if(!placa) {
      return res.status(400).json({
        sucesso: false,
        erro: 'Placa é obrigatório',
      });
    }

    const result = await executarConsulta(placa.toString())

    return res.status(200).json({
      sucesso: true,
      dados: result,
    });
  } catch (error) {
    console.error('Erro na consulta:', error);
    return res.status(500).json({
      sucesso: false,
      erro: 'Erro interno do servidor',
    });
  }
});

// app.post('/consultar-placa', async (req, res) => {
//   try {
//     const { placa } = req.body;

//     if (!placa) {
//       return res.status(400).json({
//         sucesso: false,
//         erro: 'placa é obrigatório',
//       });
//     }

//     const resultado = await executarConsulta(placa);

//     if (resultado.sucesso) {
//       return res.status(200).json(resultado);
//     }

//     return res.status(400).json(resultado);
//   } catch (error) {
//     console.error('Erro na consulta:', error);
//     return res.status(500).json({
//       sucesso: false,
//       erro: 'Erro interno do servidor',
//     });
//   }
// });

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
