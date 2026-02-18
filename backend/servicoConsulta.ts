import { supabase } from './supabase';

export const executarConsulta = async (placa: string) => {
  // TESTE: Listar todos os clientes que existem no banco agora
  // const { data: todosClientes } = await supabase.from('clientes').select('id');
  // console.log("IDs de clientes que existem no banco agora:", todosClientes?.map(c => c.id));
  // console.log("ID que o código está tentando buscar:", clienteId); 

  // const { data: cliente, error: erroCliente } = await supabase
  //   .from('clientes')
  //   .select('*')
  //   .eq('id', clienteId)
  //   .maybeSingle();

  // if (!cliente) throw new Error('Cliente não encontrado.');

  const { data: veiculo } = await supabase
    .from('veiculos')
    .select('*')
    .eq('placa', placa)
    .single();

  if (!veiculo) throw new Error('Veículo não cadastrado.');
console.log(veiculo);
  return { ...veiculo, status: 'Sucesso' };
};