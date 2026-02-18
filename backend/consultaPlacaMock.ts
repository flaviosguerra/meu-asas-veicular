export interface DadosVeiculo {
  Marca: string;
  Modelo: string;
  Cor: string;
  Ano: number;
}

const DADOS_MOCK: Record<string, DadosVeiculo> = {
  ABC1234: {
    Marca: 'VW',
    Modelo: 'Gol',
    Cor: 'Branco',
    Ano: 2020,
  },
};

/**
 * Simula a consulta à API da MOST.
 * Retorna dados mock para a placa ABC1234.
 * Para outras placas, retorna null (simulando placa não encontrada).
 */
export async function consultaPlaca(placa: string): Promise<DadosVeiculo | null> {
  const placaNormalizada = placa.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

  // Simula um pequeno delay de rede
  await new Promise((resolve) => setTimeout(resolve, 300));

  return DADOS_MOCK[placaNormalizada] ?? null;
}
