# UserInfoCard - Componente de Informações do Utilizador

## 📋 Descrição

O componente `UserInfoCard` foi criado para substituir a seção estática de informações do utilizador na área pessoal. Este componente é uma versão especializada do `ReusableCard` que aceita dados específicos do utilizador.

## 🎯 Características

### Dados Dinâmicos Aceitos:
- **Foto do utilizador** (formato JPG/PNG/SVG)
- **Nome completo**
- **Email**
- **Morada completa**
- **Data de aniversário**
- **Formação académica**
- **Tipo de utilizador**
- **Escola associada**
- **Município**

### Layout Responsivo:
- **Desktop**: Grid de 2 colunas (informações pessoais + escola)
- **Tablet**: Layout adaptativo
- **Mobile**: Coluna única com elementos empilhados

### Funcionalidades da Foto:
- Exibição da foto do utilizador
- Fallback para placeholder em caso de erro
- Formato circular com borda estilizada
- Hover effects

## 🛠️ Implementação

### Estrutura da Base de Dados
Foram adicionadas as seguintes colunas à tabela `utilizadores`:

```sql
ALTER TABLE utilizadores ADD COLUMN foto TEXT;
ALTER TABLE utilizadores ADD COLUMN morada TEXT;
ALTER TABLE utilizadores ADD COLUMN data_aniversario DATE;
ALTER TABLE utilizadores ADD COLUMN formacao_academica TEXT;
ALTER TABLE utilizadores ADD COLUMN municipio TEXT;
```

### Utilização do Componente

```jsx
<UserInfoCard 
  foto={utilizador.foto}
  nomeCompleto={utilizador.nome}
  email={utilizador.email}
  moradaCompleta={utilizador.morada}
  dataAniversario={utilizador.data_aniversario}
  formacaoAcademica={utilizador.formacao_academica}
  tipoUtilizador={utilizador.tipo_utilizador}
  escolaAssociada={utilizador.escola_associada}
  municipio={utilizador.municipio}
/>
```

## 📁 Arquivos Criados/Modificados

### Novos Arquivos:
- `src/components/UserInfoCard.jsx` - Componente principal
- `src/components/UserInfoCard.css` - Estilos do componente
- `backend/update-database.js` - Script de atualização da BD
- `backend/update-photos.js` - Script para atualizar fotos
- `public/images/users/` - Diretório para fotos dos utilizadores

### Arquivos Modificados:
- `src/pages/AreaPessoal.jsx` - Substituição da seção HTML pelo componente
- `backend/server.js` - Adição das novas colunas na BD

## 🎨 Estilos e Design

### Cores e Gradientes:
- **Informações Pessoais**: Gradiente azul suave
- **Escola Associada**: Gradiente azul claro
- **Hover Effects**: Elevação e sombras dinâmicas

### Foto do Utilizador:
- Tamanho: 120px (desktop), 100px (tablet), 80px (mobile)
- Formato: Circular com borda azul
- Fallback: Ícone personalizado com fundo degradê

## 🧪 Dados de Teste

### Utilizadores com dados completos:

**Ana Silva** (ana.silva@email.com)
- Contribuinte: 123456789
- Morada: Rua das Flores, 123, 4520-123 Santa Maria da Feira
- Aniversário: 15/03/1985
- Formação: Licenciatura em Educação Básica

**João Santos** (joao.santos@email.com)
- Contribuinte: 987654321
- Morada: Avenida Central, 456, 4520-456 Canedo
- Aniversário: 22/07/1980
- Formação: Mestrado em Psicologia Educacional

**Maria Oliveira** (maria.oliveira@email.com)
- Contribuinte: 456789123
- Morada: Travessa do Sol, 789, 4520-789 Argoncilhe
- Aniversário: 08/11/1990
- Formação: Licenciatura em Sociologia

## 🔄 Processo de Atualização

1. **Criação do componente** `UserInfoCard`
2. **Atualização da base de dados** com novas colunas
3. **Migração dos dados** existentes
4. **Substituição da seção HTML** pelo componente React
5. **Criação de imagens placeholder** SVG
6. **Testes de responsividade** e funcionalidade

## ✅ Vantagens

- **Reutilização**: Componente modular e reutilizável
- **Manutenibilidade**: Código organizado e fácil de modificar
- **Responsividade**: Design adaptativo para todos os dispositivos
- **Extensibilidade**: Fácil adicionar novos campos de dados
- **Performance**: Otimizado com fallbacks e lazy loading

## 🚀 Próximos Passos

- Implementar upload de fotos pelos utilizadores
- Adicionar edição inline de informações
- Integrar com sistema de notificações
- Implementar validação de dados em tempo real
