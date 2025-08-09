// Serviço para comunicação com a API do CAFBYGRANDESABIO
class ApiService {
  constructor() {
    this.baseURL = "http://localhost:3001/api";
  }

  // Método genérico para fazer requisições
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      console.log("🚀 Fazendo requisição para:", url);
      const response = await fetch(url, config);

      console.log(
        "📡 Resposta recebida:",
        response.status,
        response.statusText
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `HTTP ${response.status}: ${errorData.error || response.statusText}`
        );
      }

      const data = await response.json();
      console.log("✅ Dados recebidos:", data);
      return data;
    } catch (error) {
      console.error("❌ Erro na requisição:", error);

      // Verificar se é erro de rede
      if (error instanceof TypeError && error.message.includes("fetch")) {
        throw new Error(
          "Erro de conexão. Verifique se o servidor está funcionando."
        );
      }

      throw error;
    }
  }

  // =================== CONTACTOS ===================

  // Criar novo contacto/inscrição
  async criarContacto(dadosContacto) {
    return this.request("/contactos", {
      method: "POST",
      body: JSON.stringify(dadosContacto),
    });
  }

  // Listar todos os contactos
  async listarContactos() {
    return this.request("/contactos");
  }

  // =================== ESCOLAS ===================

  // Listar todas as escolas
  async listarEscolas() {
    return this.request("/escolas");
  }

  // =================== PREÇÁRIOS ===================

  // Listar todos os preçários
  async listarPrecarios() {
    return this.request("/precarios");
  }

  // =================== DASHBOARD ===================

  // Obter estatísticas do dashboard
  async obterEstatisticas() {
    return this.request("/dashboard");
  }

  // =================== UTILIZADORES ===================

  // Login do utilizador
  async loginUtilizador(email, contribuinte) {
    return this.request("/utilizadores/login", {
      method: "POST",
      body: JSON.stringify({ email, contribuinte }),
    });
  }

  // Registar novo utilizador
  async registarUtilizador(dadosUtilizador) {
    return this.request("/utilizadores/registo", {
      method: "POST",
      body: JSON.stringify(dadosUtilizador),
    });
  }

  // Listar utilizadores (para administração)
  async listarUtilizadores() {
    return this.request("/utilizadores");
  }

  // =================== TESTE ===================

  // Testar conexão com a API
  async testarConexao() {
    return this.request("/test");
  }
}

// Criar instância única do serviço
const apiService = new ApiService();

export default apiService;
