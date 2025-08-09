# 🗺️ Configuração do Google Maps

Para utilizar o Google Maps no projeto CAF BY GRANDESABIO, siga os seguintes passos:

## 📋 Pré-requisitos

1. Conta do Google
2. Acesso ao Google Cloud Console

## 🔧 Configuração da API Key

### Passo 1: Aceder ao Google Cloud Console
1. Vá para [Google Cloud Console](https://console.cloud.google.com/)
2. Faça login com a sua conta Google

### Passo 2: Criar ou Selecionar um Projeto
1. Clique no seletor de projetos no topo da página
2. Crie um novo projeto ou selecione um existente
3. Dê um nome ao projeto (ex: "CAF-GRANDESABIO-Maps")

### Passo 3: Ativar a API do Google Maps
1. No menu lateral, vá para **APIs & Services** > **Library**
2. Procure por "Maps JavaScript API"
3. Clique na API e depois em **Enable**

### Passo 4: Criar uma API Key
1. Vá para **APIs & Services** > **Credentials**
2. Clique em **+ CREATE CREDENTIALS** > **API Key**
3. Copie a chave gerada

### Passo 5: Configurar Restrições (Recomendado)
1. Clique no ícone de editar da API Key criada
2. Em **Application restrictions**, selecione **HTTP referrers**
3. Adicione os seguintes referrers:
   - `http://localhost:5176/*` (desenvolvimento)
   - `http://localhost:3000/*` (desenvolvimento alternativo)
   - `https://seudominio.com/*` (produção)
4. Em **API restrictions**, selecione **Restrict key**
5. Escolha apenas **Maps JavaScript API**
6. Clique em **Save**

### Passo 6: Configurar no Projeto
1. Abra o ficheiro `.env` na raiz do projeto
2. Substitua `YOUR_API_KEY_HERE` pela sua chave:
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSyBNLrJhOMz6idD0Xy2b...
   ```
3. Reinicie o servidor de desenvolvimento

## 🚀 Funcionalidades do Mapa

O componente GoogleMapComponent implementa:

- **Localização Automática**: Baseada na morada do utilizador
- **Marcador Personalizado**: Ícone do CAF no mapa
- **Geocodificação**: Conversão de moradas em coordenadas
- **Design Responsivo**: Adapta-se a diferentes tamanhos de ecrã
- **Estados de Loading**: Indicadores visuais durante o carregamento
- **Tratamento de Erros**: Mensagens claras em caso de falha

## 📱 Responsividade

O mapa adapta-se automaticamente:
- **Desktop**: 300px de altura
- **Tablet**: 250px de altura  
- **Mobile**: 200px de altura

## 🔒 Segurança

⚠️ **Importante**: Nunca commite a API Key real para repositórios públicos!

- O ficheiro `.env` está incluído no `.gitignore`
- Use restrições de domínio na Google Cloud Console
- Monitorize o uso da API regularmente

## 🆘 Troubleshooting

### Problema: Mapa não carrega
- Verifique se a API Key está correta no `.env`
- Confirme que a API está ativada no Google Cloud Console
- Verifique as restrições de domínio

### Problema: Erro de quota excedida
- Monitore o uso no Google Cloud Console
- Configure alertas de billing
- Otimize as chamadas à API

### Problema: Geocodificação falha
- Verifique se a morada está completa
- Confirme que a Geocoding API está ativada
- Use coordenadas padrão como fallback

## 💰 Custos

- **Maps JavaScript API**: $7 por 1,000 carregamentos
- **Geocoding API**: $5 por 1,000 pedidos
- **Quota gratuita**: $200 de créditos mensais

Para mais informações sobre preços: [Google Maps Pricing](https://cloud.google.com/maps-platform/pricing)
