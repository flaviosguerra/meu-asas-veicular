import { supabase } from './supabase';

async function buscarPlanos() {
  const { data, error } = await supabase.from('planos').select('*');

  if (error) {
    console.error('Erro ao buscar planos:', error.message);
    return;
  }

  console.log('Dados da tabela "planos":');
  console.log(JSON.stringify(data, null, 2));
}

buscarPlanos();
