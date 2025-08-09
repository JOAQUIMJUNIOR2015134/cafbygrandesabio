const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://localhost:5176",
      "http://localhost:5177",
      "http://localhost:4174",
      "https://joaquimjunior2015134.github.io",
    ],
    credentials: true,
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir ficheiros estáticos do diretório public
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

// Inicializar base de dados SQLite
const dbPath = path.join(__dirname, "cafbygrandesabio.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erro ao conectar à base de dados:", err.message);
  } else {
    console.log("Conectado à base de dados SQLite.");
    initializeDatabase();
  }
});

// Função para inicializar as tabelas
function initializeDatabase() {
  // Tabela de contactos/inscrições
  db.run(`CREATE TABLE IF NOT EXISTS contactos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT,
    escola TEXT,
    idade_crianca INTEGER,
    mensagem TEXT,
    tipo_servico TEXT,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Tabela de escolas
  db.run(`CREATE TABLE IF NOT EXISTS escolas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    codigo TEXT UNIQUE,
    municipio TEXT DEFAULT 'Santa Maria da Feira',
    ativo BOOLEAN DEFAULT 1,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Tabela de preçários
  db.run(`CREATE TABLE IF NOT EXISTS precarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    servico TEXT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao TEXT,
    periodo TEXT,
    ativo BOOLEAN DEFAULT 1,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Tabela de utilizadores
  db.run(`CREATE TABLE IF NOT EXISTS utilizadores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    contribuinte TEXT NOT NULL UNIQUE,
    password_hash TEXT,
    telefone TEXT,
    escola_associada TEXT,
    tipo_utilizador TEXT DEFAULT 'encarregado',
    foto TEXT,
    morada TEXT,
    data_aniversario DATE,
    formacao_academica TEXT,
    municipio TEXT,
    ativo BOOLEAN DEFAULT 1,
    ultimo_acesso DATETIME,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  console.log("Tabelas da base de dados inicializadas.");
  seedInitialData();
}

// Função para inserir dados iniciais
function seedInitialData() {
  // Aguardar um pouco para garantir que as tabelas foram criadas
  setTimeout(() => {
    // Inserir escolas iniciais
    const escolas = [
      "EB1 de Argoncilhe",
      "EB1 de Canedo",
      "EB1 de Escapães",
      "EB1 de Fiães",
      "EB1 de Fornos",
      "EB1 de Milheirós de Poiares",
      "EB1 de Mozelos",
      "EB1 de Paços de Brandão",
      "EB1 de Rio Meão",
      "EB1 de Romariz",
      "EB1 de Santa Maria da Feira",
      "EB1 de São João de Ver",
      "EB1 de Vale",
      "EB1 de Vila Maior",
    ];

    escolas.forEach((escola) => {
      db.run(
        `INSERT OR IGNORE INTO escolas (nome, codigo) VALUES (?, ?)`,
        [escola, escola.toLowerCase().replace(/\s+/g, "_")],
        (err) => {
          if (err) console.error("Erro ao inserir escola:", err);
        }
      );
    });

    // Inserir preçários iniciais
    const precarios = [
      {
        servico: "CAF Mensal",
        preco: 45.0,
        descricao: "Centro de Atividades de Férias - Mensalidade",
        periodo: "mensal",
      },
      {
        servico: "CAF Semanal",
        preco: 15.0,
        descricao: "Centro de Atividades de Férias - Semanal",
        periodo: "semanal",
      },
      {
        servico: "Refeição",
        preco: 3.5,
        descricao: "Almoço completo",
        periodo: "diário",
      },
      {
        servico: "Lanche",
        preco: 1.5,
        descricao: "Lanche da tarde",
        periodo: "diário",
      },
    ];

    precarios.forEach((item) => {
      db.run(
        `INSERT OR IGNORE INTO precarios (servico, preco, descricao, periodo) VALUES (?, ?, ?, ?)`,
        [item.servico, item.preco, item.descricao, item.periodo],
        (err) => {
          if (err) console.error("Erro ao inserir preçário:", err);
        }
      );
    });

    // Inserir utilizadores de teste
    const utilizadores = [
      {
        nome: "Ana Silva",
        email: "ana.silva@email.com",
        contribuinte: "123456789",
        telefone: "912345678",
        escola_associada: "EB1 de Santa Maria da Feira",
        foto: "/images/users/ana-silva.jpg",
        morada: "Rua das Flores, 123, 4520-123 Santa Maria da Feira",
        data_aniversario: "1985-03-15",
        formacao_academica: "Licenciatura em Educação Básica",
        municipio: "Santa Maria da Feira"
      },
      {
        nome: "João Santos",
        email: "joao.santos@email.com",
        contribuinte: "987654321",
        telefone: "923456789",
        escola_associada: "EB1 de Canedo",
        foto: "/images/users/joao-santos.jpg",
        morada: "Avenida Central, 456, 4520-456 Canedo",
        data_aniversario: "1980-07-22",
        formacao_academica: "Mestrado em Psicologia Educacional",
        municipio: "Santa Maria da Feira"
      },
      {
        nome: "Maria Oliveira",
        email: "maria.oliveira@email.com",
        contribuinte: "456789123",
        telefone: "934567890",
        escola_associada: "EB1 de Argoncilhe",
        foto: "/images/users/maria-oliveira.jpg",
        morada: "Travessa do Sol, 789, 4520-789 Argoncilhe",
        data_aniversario: "1990-11-08",
        formacao_academica: "Licenciatura em Sociologia",
        municipio: "Santa Maria da Feira"
      },
    ];

    utilizadores.forEach((user) => {
      db.run(
        `INSERT OR IGNORE INTO utilizadores (nome, email, contribuinte, telefone, escola_associada, foto, morada, data_aniversario, formacao_academica, municipio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          user.nome,
          user.email,
          user.contribuinte,
          user.telefone,
          user.escola_associada,
          user.foto,
          user.morada,
          user.data_aniversario,
          user.formacao_academica,
          user.municipio,
        ],
        (err) => {
          if (err) console.error("Erro ao inserir utilizador:", err);
        }
      );
    });

    console.log("✅ Dados iniciais inseridos com sucesso!");
  }, 100);
}

// =================== ROTAS DA API ===================

// Rota de teste
app.get("/api/test", (req, res) => {
  res.json({
    message: "API CAFBYGRANDESABIO funcionando!",
    timestamp: new Date(),
  });
});

// =================== ROTAS DE CONTACTOS ===================

// Criar novo contacto/inscrição
app.post("/api/contactos", (req, res) => {
  const {
    nome,
    email,
    telefone,
    escola,
    idade_crianca,
    mensagem,
    tipo_servico,
  } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  const sql = `INSERT INTO contactos (nome, email, telefone, escola, idade_crianca, mensagem, tipo_servico) 
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.run(
    sql,
    [nome, email, telefone, escola, idade_crianca, mensagem, tipo_servico],
    function (err) {
      if (err) {
        console.error("Erro ao inserir contacto:", err);
        return res.status(500).json({ error: "Erro interno do servidor" });
      }

      res.status(201).json({
        id: this.lastID,
        message: "Contacto criado com sucesso",
        data: { id: this.lastID, nome, email },
      });
    }
  );
});

// Listar todos os contactos
app.get("/api/contactos", (req, res) => {
  const sql = `SELECT * FROM contactos ORDER BY data_criacao DESC`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("Erro ao buscar contactos:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
    res.json(rows);
  });
});

// =================== ROTAS DE ESCOLAS ===================

// Listar todas as escolas
app.get("/api/escolas", (req, res) => {
  const sql = `SELECT * FROM escolas WHERE ativo = 1 ORDER BY nome`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("Erro ao buscar escolas:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
    res.json(rows);
  });
});

// =================== ROTAS DE PREÇÁRIOS ===================

// Listar todos os preçários
app.get("/api/precarios", (req, res) => {
  const sql = `SELECT * FROM precarios WHERE ativo = 1 ORDER BY servico`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("Erro ao buscar preçários:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
    res.json(rows);
  });
});

// =================== ESTATÍSTICAS ===================

// Dashboard - estatísticas gerais
app.get("/api/dashboard", (req, res) => {
  const stats = {};

  // Contar contactos
  db.get(`SELECT COUNT(*) as total FROM contactos`, [], (err, row) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar estatísticas" });
    }
    stats.total_contactos = row.total;

    // Contar escolas ativas
    db.get(
      `SELECT COUNT(*) as total FROM escolas WHERE ativo = 1`,
      [],
      (err, row) => {
        if (err) {
          return res.status(500).json({ error: "Erro ao buscar estatísticas" });
        }
        stats.total_escolas = row.total;

        // Contactos por escola
        db.all(
          `SELECT escola, COUNT(*) as total FROM contactos WHERE escola IS NOT NULL GROUP BY escola ORDER BY total DESC LIMIT 5`,
          [],
          (err, rows) => {
            if (err) {
              return res
                .status(500)
                .json({ error: "Erro ao buscar estatísticas" });
            }
            stats.contactos_por_escola = rows;

            res.json(stats);
          }
        );
      }
    );
  });
});

// ================================
// ENDPOINTS PARA UTILIZADORES
// ================================

// Verificar utilizador (login)
app.post("/api/utilizadores/login", (req, res) => {
  const { email, contribuinte } = req.body;

  // Validação básica
  if (!email || !contribuinte) {
    return res.status(400).json({
      error: "Email e número de contribuinte são obrigatórios",
    });
  }

  // Validação do formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Formato de email inválido" });
  }

  // Validação do número de contribuinte (9 dígitos)
  const contribuinteRegex = /^\d{9}$/;
  if (!contribuinteRegex.test(contribuinte)) {
    return res.status(400).json({
      error: "Número de contribuinte deve ter 9 dígitos",
    });
  }

  // Verificar se o utilizador existe na base de dados
  db.get(
    `SELECT id, nome, email, contribuinte, escola_associada, tipo_utilizador, 
            foto, morada, data_aniversario, formacao_academica, municipio, ativo 
     FROM utilizadores 
     WHERE email = ? AND contribuinte = ? AND ativo = 1`,
    [email, contribuinte],
    (err, row) => {
      if (err) {
        console.error("Erro na verificação do utilizador:", err);
        return res.status(500).json({ error: "Erro interno do servidor" });
      }

      if (!row) {
        return res.status(401).json({
          error: "Credenciais inválidas ou utilizador não encontrado",
        });
      }

      // Atualizar último acesso
      db.run(
        `UPDATE utilizadores SET ultimo_acesso = CURRENT_TIMESTAMP WHERE id = ?`,
        [row.id],
        (updateErr) => {
          if (updateErr) {
            console.error("Erro ao atualizar último acesso:", updateErr);
          }
        }
      );

      // Retornar dados do utilizador (sem informações sensíveis)
      res.json({
        success: true,
        utilizador: {
          id: row.id,
          nome: row.nome,
          email: row.email,
          escola_associada: row.escola_associada,
          tipo_utilizador: row.tipo_utilizador,
          foto: row.foto,
          morada: row.morada,
          data_aniversario: row.data_aniversario,
          formacao_academica: row.formacao_academica,
          municipio: row.municipio,
        },
        message: "Acesso autorizado com sucesso",
      });
    }
  );
});

// Criar utilizador (registo)
app.post("/api/utilizadores/registo", (req, res) => {
  const { nome, email, contribuinte, telefone, escola_associada } = req.body;

  // Validação básica
  if (!nome || !email || !contribuinte) {
    return res.status(400).json({
      error: "Nome, email e número de contribuinte são obrigatórios",
    });
  }

  // Validação do formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Formato de email inválido" });
  }

  // Validação do número de contribuinte
  const contribuinteRegex = /^\d{9}$/;
  if (!contribuinteRegex.test(contribuinte)) {
    return res.status(400).json({
      error: "Número de contribuinte deve ter 9 dígitos",
    });
  }

  // Verificar se já existe utilizador com este email ou contribuinte
  db.get(
    `SELECT id FROM utilizadores WHERE email = ? OR contribuinte = ?`,
    [email, contribuinte],
    (err, row) => {
      if (err) {
        console.error("Erro na verificação de duplicados:", err);
        return res.status(500).json({ error: "Erro interno do servidor" });
      }

      if (row) {
        return res.status(409).json({
          error:
            "Já existe um utilizador com este email ou número de contribuinte",
        });
      }

      // Inserir novo utilizador
      db.run(
        `INSERT INTO utilizadores (nome, email, contribuinte, telefone, escola_associada) 
         VALUES (?, ?, ?, ?, ?)`,
        [nome, email, contribuinte, telefone, escola_associada],
        function (insertErr) {
          if (insertErr) {
            console.error("Erro ao criar utilizador:", insertErr);
            return res.status(500).json({ error: "Erro ao criar utilizador" });
          }

          res.status(201).json({
            success: true,
            message: "Utilizador criado com sucesso",
            utilizador: {
              id: this.lastID,
              nome,
              email,
              escola_associada,
            },
          });
        }
      );
    }
  );
});

// Listar utilizadores (para administração)
app.get("/api/utilizadores", (req, res) => {
  db.all(
    `SELECT id, nome, email, contribuinte, telefone, escola_associada, 
            tipo_utilizador, ativo, ultimo_acesso, data_criacao 
     FROM utilizadores 
     ORDER BY data_criacao DESC`,
    [],
    (err, rows) => {
      if (err) {
        console.error("Erro ao listar utilizadores:", err);
        return res.status(500).json({ error: "Erro ao buscar utilizadores" });
      }
      res.json(rows);
    }
  );
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo deu errado!" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📊 API disponível em: http://localhost:${PORT}/api`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🔒 Fechando conexão com a base de dados...");
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("✅ Conexão com a base de dados fechada.");
    }
    process.exit(0);
  });
});
