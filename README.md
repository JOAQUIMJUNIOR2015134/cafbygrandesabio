# CAF BY GRANDESABIO

## Descrição

Website institucional para o Centro de Actividades de Férias (CAF) da GRANDESABIO em Santa Maria da Feira. Este projeto foi desenvolvido com React e Vite, proporcionando uma experiência moderna e responsiva para famílias que procuram serviços educativos de qualidade para os seus filhos.

## Características Principais

### 🏫 Serviços CAF

- Acompanhamento educativo para crianças dos 6 aos 12 anos (1º Ciclo)
- Atividades de férias durante pausas letivas
- Apoio às famílias com horários flexíveis
- Presença em 34 escolas da região de Santa Maria da Feira

### 🌐 Funcionalidades do Website

- **Design Responsivo**: Adaptável a todos os dispositivos (desktop, tablet, mobile)
- **Navegação Intuitiva**: Menu claro e organizado
- **Informações Completas**: Detalhes sobre serviços, escolas e horários
- **Localização Interativa**: Mapas Google Maps integrados
- **Formulário de Contacto**: Comunicação direta com a instituição

### 📱 Páginas Principais

- **Home**: Apresentação geral dos serviços
- **CAF Santa Maria**: Informações detalhadas sobre o CAF principal
- **Onde Estamos**: Localizações e mapas interativos
- **Contactos**: Formulário e informações de contacto

## Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interfaces de utilizador
- **Vite**: Build tool e servidor de desenvolvimento
- **React Router DOM**: Navegação client-side
- **CSS Grid & Flexbox**: Layout responsivo
- **Google Maps Embed**: Integração de mapas
- **Modern JavaScript (ES6+)**: Funcionalidades modernas do JavaScript

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/[seu-usuario]/cafbygrandesabio.git
   cd cafbygrandesabio
   ```

2. **Instalar dependências**

   ```bash
   npm install
   ```

3. **Executar em modo de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Abrir no browser**
   - Aceder a `http://localhost:5174`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Pré-visualiza a versão de produção

## Estrutura do Projeto

```
CAFBYGRANDESABIO/
├── public/                 # Ficheiros públicos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── HeroSection.jsx
│   │   ├── ReusableCard.jsx
│   │   ├── EscolasServico.jsx
│   │   ├── PausaFeriasLectivas.jsx
│   │   ├── ContactForm.jsx
│   │   ├── GoogleMapsStreetView.jsx
│   │   └── Navbar.jsx
│   ├── pages/            # Páginas principais
│   │   ├── Home.jsx
│   │   ├── CafSantaMaria.jsx
│   │   ├── OndeEstamos.jsx
│   │   └── Contactos.jsx
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Ponto de entrada
│   └── index.css         # Estilos globais
├── package.json          # Dependências e scripts
└── README.md            # Este ficheiro
```

## Funcionalidades Detalhadas

### 🎯 Componentes Principais

#### EscolasServico

- Listagem de 34 escolas servidas
- Grid responsivo 4→3→2→1 colunas
- Integração com Google Maps por escola

#### ContactForm

- Formulário completo de contacto
- Validação de campos
- Design consistente com o tema

#### GoogleMapsStreetView

- Mapa interativo da localização principal
- Informações de contacto organizadas
- Layout responsivo

## Responsividade

O projeto foi desenvolvido com abordagem mobile-first:

- **Desktop (1200px+)**: Layout completo com 4 colunas
- **Tablet (768px-1199px)**: 2-3 colunas, elementos adaptados
- **Mobile (320px-767px)**: 1 coluna, navegação otimizada
