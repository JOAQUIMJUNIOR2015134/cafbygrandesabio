const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Conectar à base de dados
const dbPath = path.join(__dirname, "cafbygrandesabio.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erro ao conectar à base de dados:", err.message);
    process.exit(1);
  } else {
    console.log("Conectado à base de dados SQLite para atualização.");
    updateDatabase();
  }
});

function updateDatabase() {
  console.log("🔄 Iniciando atualização da base de dados...");

  // Adicionar novas colunas à tabela utilizadores
  const alterQueries = [
    "ALTER TABLE utilizadores ADD COLUMN foto TEXT",
    "ALTER TABLE utilizadores ADD COLUMN morada TEXT",
    "ALTER TABLE utilizadores ADD COLUMN data_aniversario DATE",
    "ALTER TABLE utilizadores ADD COLUMN formacao_academica TEXT",
    "ALTER TABLE utilizadores ADD COLUMN municipio TEXT"
  ];

  let completedQueries = 0;

  alterQueries.forEach((query, index) => {
    db.run(query, (err) => {
      if (err && !err.message.includes("duplicate column name")) {
        console.error(`❌ Erro na query ${index + 1}:`, err.message);
      } else {
        if (!err) {
          console.log(`✅ Coluna adicionada: ${query.split(' ')[4]}`);
        }
      }
      
      completedQueries++;
      
      // Quando todas as queries forem executadas, atualizar os dados
      if (completedQueries === alterQueries.length) {
        updateUserData();
      }
    });
  });
}

function updateUserData() {
  console.log("🔄 Atualizando dados dos utilizadores...");

  const updates = [
    {
      email: "ana.silva@email.com",
      foto: "/images/users/ana-silva.jpg",
      morada: "Rua das Flores, 123, 4520-123 Santa Maria da Feira",
      data_aniversario: "1985-03-15",
      formacao_academica: "Licenciatura em Educação Básica",
      municipio: "Santa Maria da Feira"
    },
    {
      email: "joao.santos@email.com",
      foto: "/images/users/joao-santos.jpg",
      morada: "Avenida Central, 456, 4520-456 Canedo",
      data_aniversario: "1980-07-22",
      formacao_academica: "Mestrado em Psicologia Educacional",
      municipio: "Santa Maria da Feira"
    },
    {
      email: "maria.oliveira@email.com",
      foto: "/images/users/maria-oliveira.jpg",
      morada: "Travessa do Sol, 789, 4520-789 Argoncilhe",
      data_aniversario: "1990-11-08",
      formacao_academica: "Licenciatura em Sociologia",
      municipio: "Santa Maria da Feira"
    }
  ];

  let completedUpdates = 0;

  updates.forEach((user) => {
    db.run(
      `UPDATE utilizadores SET foto = ?, morada = ?, data_aniversario = ?, formacao_academica = ?, municipio = ? WHERE email = ?`,
      [user.foto, user.morada, user.data_aniversario, user.formacao_academica, user.municipio, user.email],
      function(err) {
        if (err) {
          console.error(`❌ Erro ao atualizar ${user.email}:`, err.message);
        } else {
          console.log(`✅ Utilizador atualizado: ${user.email}`);
        }
        
        completedUpdates++;
        
        if (completedUpdates === updates.length) {
          console.log("🎉 Atualização da base de dados concluída!");
          db.close((err) => {
            if (err) {
              console.error("Erro ao fechar a base de dados:", err.message);
            } else {
              console.log("Base de dados fechada.");
            }
            process.exit(0);
          });
        }
      }
    );
  });
}
