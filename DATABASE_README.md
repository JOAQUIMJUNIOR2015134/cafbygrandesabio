# 🗄️ Base de Dados CAFBYGRANDESABIO

## Visão Geral

Este projeto integra uma base de dados SQLite com API RESTful para gerenciar:

- **Contactos/Inscrições** dos alunos
- **Escolas** parceiras
- **Preçários** dos serviços
- **Estatísticas** do dashboard

## 🏗️ Arquitetura

```
CAFBYGRANDESABIO/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── services/
│   │   │   └── apiService.js    # Cliente da API
│   │   └── components/
│   │       └── ContactForm.jsx  # Integrado com BD
└── backend/           # Node.js + Express + SQLite
    ├── server.js      # Servidor principal
    ├── cafbygrandesabio.db    # Base de dados SQLite
    └── package.json
```

## 📋 Schema da Base de Dados

### Tabela: `contactos`

```sql
CREATE TABLE contactos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT,
    escola TEXT,
    idade_crianca INTEGER,
    mensagem TEXT,
    tipo_servico TEXT,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Tabela: `escolas`

```sql
CREATE TABLE escolas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    codigo TEXT UNIQUE,
    municipio TEXT DEFAULT 'Santa Maria da Feira',
    ativo BOOLEAN DEFAULT 1,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Tabela: `precarios`

```sql
CREATE TABLE precarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    servico TEXT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao TEXT,
    periodo TEXT,
    ativo BOOLEAN DEFAULT 1,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 Como Executar

### 1. Iniciar o Backend (API)

```bash
cd backend
npm install
npm run dev
```

**Servidor rodará em:** http://localhost:3001

### 2. Iniciar o Frontend

```bash
# Na pasta raiz do projeto
npm run dev
```

**Frontend rodará em:** http://localhost:5174

## 📡 Endpoints da API

### Teste de Conexão

- `GET /api/test` - Verifica se a API está funcionando

### Contactos

- `POST /api/contactos` - Criar novo contacto/inscrição
- `GET /api/contactos` - Listar todos os contactos

### Escolas

- `GET /api/escolas` - Listar escolas ativas

### Preçários

- `GET /api/precarios` - Listar preçários ativos

### Dashboard

- `GET /api/dashboard` - Estatísticas gerais

## 💻 Exemplos de Uso

### Criar Contacto

```javascript
import apiService from "./services/apiService";

const novoContacto = {
  nome: "João Silva",
  email: "joao@email.com",
  telefone: "912345678",
  escola: "EB1 de Santa Maria da Feira",
  idade_crianca: 8,
  mensagem: "Gostaria de inscrever o meu filho no CAF",
  tipo_servico: "Inscrição CAF",
};

const resultado = await apiService.criarContacto(novoContacto);
```

### Listar Escolas

```javascript
const escolas = await apiService.listarEscolas();
console.log(escolas);
// [
//   { id: 1, nome: "EB1 de Argoncilhe", codigo: "eb1_de_argoncilhe" },
//   { id: 2, nome: "EB1 de Canedo", codigo: "eb1_de_canedo" },
//   ...
// ]
```

## 🔧 Funcionalidades Implementadas

### ✅ Frontend

- [x] Formulário de contacto integrado com BD
- [x] Dropdown de escolas carregado da API
- [x] Mensagens de feedback de sucesso/erro
- [x] Validação de dados antes do envio
- [x] Fallback para escolas estáticas se API falhar

### ✅ Backend

- [x] API RESTful completa
- [x] Base de dados SQLite inicializada automaticamente
- [x] Dados iniciais (seed) das escolas e preçários
- [x] Validação de dados
- [x] CORS configurado para frontend
- [x] Error handling
- [x] Logging das operações

### ✅ Base de Dados

- [x] Schema otimizado para o CAF
- [x] Índices automáticos
- [x] Dados iniciais das 14+ escolas
- [x] Preçários base configurados
- [x] Timestamps automáticos

## 📊 Dados Iniciais

### Escolas (14 unidades)

- EB1 de Argoncilhe
- EB1 de Canedo
- EB1 de Escapães
- EB1 de Fiães
- EB1 de Fornos
- EB1 de Milheirós de Poiares
- EB1 de Mozelos
- EB1 de Paços de Brandão
- EB1 de Rio Meão
- EB1 de Romariz
- EB1 de Santa Maria da Feira
- EB1 de São João de Ver
- EB1 de Vale
- EB1 de Vila Maior

### Preçários Base

- CAF Mensal: €45.00
- CAF Semanal: €15.00
- Refeição: €3.50
- Lanche: €1.50

## 🔗 Próximos Passos

### Para Produção

1. **Migrar para PostgreSQL** (mais robusto)
2. **Implementar autenticação** (JWT)
3. **Dashboard administrativo** para gestão
4. **Backup automático** da base de dados
5. **Deploy no Heroku/Railway** com BD na nuvem

### Melhorias Futuras

- [ ] Sistema de autenticação para administradores
- [ ] Dashboard de estatísticas avançadas
- [ ] Exportação de dados para Excel/PDF
- [ ] Sistema de notificações por email
- [ ] Integração com sistema de pagamentos
- [ ] API para mobile app

## 🛠️ Tecnologias Utilizadas

**Backend:**

- Node.js + Express.js
- SQLite3 (base de dados)
- CORS, Helmet (segurança)
- Morgan (logging)

**Frontend:**

- React 19.1.1
- Vite 7.1.0
- Fetch API (comunicação)

**Ferramentas:**

- Nodemon (desenvolvimento)
- Git (controlo de versão)

---

_Base de dados implementada e totalmente funcional! 🎯_
