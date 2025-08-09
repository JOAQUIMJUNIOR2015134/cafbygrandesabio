# 🗄️ **GUIA: Como Aceder à Base de Dados no VS Code**

## 📋 **Resumo dos Métodos Disponíveis**

### **✅ Método 1: Extensões VS Code (RECOMENDADO)**

#### **SQLite Viewer** (Mais Fácil)

1. Instalar extensão: `qwtel.sqlite-viewer`
2. Abrir o ficheiro: `backend/cafbygrandesabio.db`
3. Visualizar dados numa interface gráfica

#### **SQLite** (Mais Funcional)

1. Instalar extensão: `alexcvzz.vscode-sqlite`
2. Clique direito no ficheiro `.db` → "Open Database"
3. Executar queries SQL directamente

### **✅ Método 2: Script Node.js (JÁ CRIADO)**

Ficheiro: `backend/visualizar-db.js`

```bash
# No terminal do backend:
node visualizar-db.js
```

**Resultado obtido:**

- ✅ 2 contactos registados
- ✅ 14 escolas cadastradas
- ✅ 12 preçários ativos
- ✅ Visualização completa dos dados

### **✅ Método 3: Via API (TESTADO)**

Endpoints funcionais:

```bash
# Listar contactos
GET http://localhost:3001/api/contactos

# Listar escolas
GET http://localhost:3001/api/escolas

# Dashboard com estatísticas
GET http://localhost:3001/api/dashboard
```

## 🎯 **Como Usar as Extensões**

### **Passo 1: Instalar Extensão**

1. Ir para o painel de extensões (Ctrl+Shift+X)
2. Procurar "SQLite Viewer"
3. Instalar a extensão `qwtel.sqlite-viewer`

### **Passo 2: Abrir Base de Dados**

1. Navegar para: `backend/cafbygrandesabio.db`
2. Fazer duplo clique no ficheiro
3. **OU** clique direito → "Open Database"

### **Passo 3: Explorar Tabelas**

- **contactos**: Ver inscrições dos alunos
- **escolas**: Lista das 14 escolas
- **precarios**: Preçários dos serviços

## 📊 **Estado Atual da Base de Dados**

### **Tabela: contactos (2 registos)**

```
ID | Nome         | Email            | Escola                  | Idade
1  | Miguel Teste | miguel@teste.com | EB1 Santa Maria Feira  | 7
2  | Miguel Teste | miguel@teste.com | EB1 Santa Maria Feira  | 7
```

### **Tabela: escolas (14 registos)**

```
1.  EB1 de Argoncilhe
2.  EB1 de Canedo
3.  EB1 de Escapães
4.  EB1 de Fiães
5.  EB1 de Fornos
... (14 escolas total)
```

### **Tabela: precarios (4 tipos)**

```
Serviço      | Preço
CAF Mensal   | €45.00
CAF Semanal  | €15.00
Refeição     | €3.50
Lanche       | €1.50
```

## 🔧 **Comandos Úteis**

### **Visualizar Dados (Node.js)**

```bash
cd backend
node visualizar-db.js
```

### **Testar API**

```powershell
# PowerShell - Listar escolas
Invoke-WebRequest -Uri "http://localhost:3001/api/escolas" | Select-Object -ExpandProperty Content

# PowerShell - Dashboard
Invoke-WebRequest -Uri "http://localhost:3001/api/dashboard" | Select-Object -ExpandProperty Content
```

### **Queries SQL Úteis**

```sql
-- Contar contactos por escola
SELECT escola, COUNT(*) as total
FROM contactos
GROUP BY escola;

-- Listar últimos contactos
SELECT nome, email, data_criacao
FROM contactos
ORDER BY data_criacao DESC
LIMIT 5;

-- Escolas com mais procura
SELECT escola, COUNT(*) as inscricoes
FROM contactos
GROUP BY escola
ORDER BY inscricoes DESC;
```

## 🎯 **Próximas Ações Recomendadas**

### **1. Instalar Extensão SQLite**

- Facilita visualização e edição
- Interface gráfica intuitiva

### **2. Testar Formulário**

- Ir para: http://localhost:5174/cafbygrandesabio/
- Preencher formulário de contacto
- Verificar se dados aparecem na BD

### **3. Limpar Dados Duplicados**

```sql
-- Remover contactos duplicados (manter apenas o mais recente)
DELETE FROM contactos
WHERE id NOT IN (
    SELECT MAX(id)
    FROM contactos
    GROUP BY nome, email
);
```

## 📁 **Localização dos Ficheiros**

```
backend/
├── cafbygrandesabio.db      # 📊 Base de dados SQLite
├── server.js                # 🚀 Servidor API
├── visualizar-db.js         # 👁️ Script para visualizar dados
└── package.json             # 📦 Dependências
```

## ✅ **Base de Dados Funcionando Perfeitamente!**

- ✅ SQLite operacional
- ✅ API funcionando (porta 3001)
- ✅ Frontend integrado (porta 5174)
- ✅ Dados iniciais carregados
- ✅ Formulário funcionando

---

**Agora podes aceder à base de dados facilmente pelo VS Code! 🎉**
