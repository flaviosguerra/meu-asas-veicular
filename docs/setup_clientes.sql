-- ============================================
-- SETUP TABELA CLIENTES - Meu Asas Veicular
-- Execute no SQL Editor do Supabase
-- ============================================

-- 1. Adicionar a coluna qtd_consultas (integer, começa em 0)
ALTER TABLE clientes
ADD COLUMN IF NOT EXISTS qtd_consultas integer DEFAULT 0;

-- 2. Garantir que registros existentes tenham 0
UPDATE clientes SET qtd_consultas = 0 WHERE qtd_consultas IS NULL;

-- 3. Criar registro de teste
-- IMPORTANTE: Copie o "id" retornado e use no frontend (cliente_id)
INSERT INTO clientes (plano_id, qtd_consultas)
SELECT id, 0 FROM planos LIMIT 1
RETURNING id, plano_id, qtd_consultas;

-- Se o INSERT acima falhar (colunas obrigatórias como nome, email):
-- Descomente e adapte a linha abaixo com os campos que sua tabela exige:
-- INSERT INTO clientes (plano_id, qtd_consultas, nome, email)
-- SELECT id, 0, 'Cliente Teste', 'teste@email.com' FROM planos LIMIT 1
-- RETURNING id, plano_id, qtd_consultas;
