// Script para visualizar dados da base de dados SQLite
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "cafbygrandesabio.db");
console.log("📊 Conectando à base de dados:", dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Erro ao conectar à base de dados:", err.message);
    return;
  }
  console.log("✅ Conectado à base de dados SQLite!");
});

// Função para mostrar todas as tabelas
function mostrarTabelas() {
  console.log("\n🗂️  TABELAS NA BASE DE DADOS:");
  console.log("================================");

  db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, rows) => {
    if (err) {
      console.error("Erro:", err.message);
      return;
    }

    rows.forEach((row, index) => {
      console.log(`${index + 1}. ${row.name}`);
    });

    // Mostrar dados de cada tabela
    mostrarDadosTabelas();
  });
}

// Função para mostrar dados das tabelas
function mostrarDadosTabelas() {
  // Mostrar contactos
  console.log("\n👥 CONTACTOS:");
  console.log("=============");
  db.all("SELECT * FROM contactos ORDER BY data_criacao DESC", (err, rows) => {
    if (err) {
      console.error("Erro:", err.message);
    } else {
      console.log(`Total de contactos: ${rows.length}`);
      rows.forEach((row, index) => {
        console.log(`\n${index + 1}. ${row.nome}`);
        console.log(`   📧 Email: ${row.email}`);
        console.log(`   📞 Telefone: ${row.telefone}`);
        console.log(`   🏫 Escola: ${row.escola}`);
        console.log(`   👶 Idade: ${row.idade_crianca} anos`);
        console.log(`   📝 Serviço: ${row.tipo_servico}`);
        console.log(`   📅 Data: ${row.data_criacao}`);
      });
    }

    // Mostrar escolas
    mostrarEscolas();
  });
}

function mostrarEscolas() {
  console.log("\n\n🏫 ESCOLAS:");
  console.log("===========");
  db.all("SELECT * FROM escolas ORDER BY nome", (err, rows) => {
    if (err) {
      console.error("Erro:", err.message);
    } else {
      console.log(`Total de escolas: ${rows.length}`);
      rows.forEach((row, index) => {
        console.log(`${index + 1}. ${row.nome}`);
      });
    }

    // Mostrar preçários
    mostrarPrecarios();
  });
}

function mostrarPrecarios() {
  console.log("\n\n💰 PREÇÁRIOS:");
  console.log("==============");
  db.all("SELECT * FROM precarios ORDER BY preco", (err, rows) => {
    if (err) {
      console.error("Erro:", err.message);
    } else {
      console.log(`Total de preçários: ${rows.length}`);
      rows.forEach((row, index) => {
        console.log(`${index + 1}. ${row.servico}: €${row.preco}`);
        if (row.descricao) {
          console.log(`    📝 ${row.descricao}`);
        }
      });
    }

    // Fechar conexão
    db.close((err) => {
      if (err) {
        console.error("Erro ao fechar base de dados:", err.message);
      } else {
        console.log("\n✅ Conexão à base de dados fechada.");
      }
    });
  });
}

// Iniciar visualização
mostrarTabelas();
