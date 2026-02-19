# 🚗 Meu Asas Veicular

Um **SaaS completo** para consulta de placas veiculares desenvolvido com arquitetura limpa (Clean Architecture) e tecnologias modernas.

## 📋 Sobre o Projeto

Sistema web que permite consultar informações de veículos através da placa, oferecendo dados como marca, modelo, ano e cor. Ideal para concessionárias, seguradoras e empresas que precisam validar informações veiculares.

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** + **Express** - Servidor web
- **TypeScript** - Tipagem estática
- **Supabase** - Banco de dados e autenticação
- **Clean Architecture** - Separação de responsabilidades
- **Zsh** - Terminal integrado

### Frontend  
- **React 18** - Interface de usuário
- **Vite** - Build tool e dev server
- **JavaScript/JSX** - Lógica da aplicação
- **CSS3** - Estilização com efeitos modernos

### Banco de Dados
- **Supabase PostgreSQL** - Banco principal
- **Row Level Security (RLS)** - Segurança de dados

## 🏗️ Arquitetura do Sistema

```
meu-asas-veicular/
├── frontend/                 # Interface React
│   ├── src/
│   │   ├── App.jsx          # Componente principal
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Estilos globais
│   ├── package.json
│   └── vite.config.js       # Configuração Vite + proxy
│
├── backend/                  # API Node.js
│   ├── src/
│   │   ├── main.ts          # Servidor Express
│   │   ├── controllers/     # Controle HTTP
│   │   ├── routes/          # Definição de rotas
│   │   ├── usecases/        # Regras de negócio
│   │   ├── entities/        # Modelos de domínio
│   │   ├── interfaces/      # Contratos/Abstrações
│   │   ├── frameworks/      # Implementações concretas
│   │   ├── infrastructure/  # Configurações externas
│   │   └── types/           # Tipagens TypeScript
│   ├── package.json
│   └── .env                 # Variáveis de ambiente
│
├── docs/                    # Documentação
│   └── setup_clientes.sql   # Scripts SQL do banco
└── README.md               # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no Supabase

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd meu-asas-veicular
```

### 2. Configurar Backend

```bash
cd backend
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais do Supabase
```

**Arquivo .env:**
```env
PORT=3001
SUPABASE_URL=sua_url_do_supabase
SUPABASE_KEY=sua_chave_publica_do_supabase
```

### 3. Configurar Frontend

```bash
cd frontend
npm install
```

### 4. Executar Aplicação

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Servidor: http://localhost:3001
```

**Terminal 2 - Frontend:**
```bash
cd frontend  
npm run dev
# Interface: http://localhost:8080
```

## 📡 API Endpoints

### Base URL
```
http://localhost:3001/api
```

### Rotas Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/` | Status da API |
| `GET` | `/vehicles/search/:placa` | Consultar veículo por placa |

### Exemplos de Uso

**Consultar status:**
```bash
curl http://localhost:3001/api/
```

**Buscar veículo por placa:**
```bash
curl http://localhost:3001/api/vehicles/search/ABC1234
```

**Resposta de sucesso:**
```json
{
  "success": true,
  "data": {
    "id": "uuid-do-veiculo",
    "placa": "ABC1234", 
    "modelo": "Civic",
    "marca": "Honda",
    "ano": 2020,
    "cor": "Prata"
  }
}
```

## 🔧 Funcionalidades

- ✅ **Consulta por placa** - Busca de veículos por placa completa
- ✅ **Interface intuitiva** - Design moderno com glassmorphism
- ✅ **Validação de entrada** - Formato de placa brasileira
- ✅ **Tratamento de erros** - Mensagens claras para o usuário
- ✅ **Logs detalhados** - Rastreamento de requisições no backend
- ✅ **Proxy configurado** - Frontend se comunica automaticamente com backend
- ✅ **Arquitetura limpa** - Código organizado e manutenível

## 🔒 Segurança

- **CORS configurado** para origens específicas
- **Variáveis de ambiente** para credenciais sensíveis  
- **Validação de tipos** em runtime (TypeScript)
- **Row Level Security** disponível no Supabase (configurável)

## 🐛 Troubleshooting

### Problema: "Veículo não encontrado"
- Verificar se há dados na tabela `veiculos` no Supabase
- Conferir se RLS está configurado corretamente
- Executar script de inserção de dados de teste

### Problema: Erro de conexão
- Verificar se backend está executando na porta 3001
- Conferir variáveis SUPABASE_URL e SUPABASE_KEY no .env
- Testar conexão: `curl http://localhost:3001/api/`

### Problema: Frontend não carrega
- Verificar se está na porta 8080
- Conferir proxy no arquivo `vite.config.js`
- Executar `npm run dev` no diretório frontend

## 👨‍💻 Desenvolvimento

### Estrutura de Commits
- Usar prefixo para os commits: feat, fix, chore, refactor...

```bash
git add .
git commit -m "feat: adicionar nova funcionalidade"
git push origin main
```

### Scripts Disponíveis

**Backend:**
- `npm start` - Iniciar servidor de produção
- `npm run dev` - Iniciar com hot reload (se configurado)

**Frontend:**
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da build

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

---
