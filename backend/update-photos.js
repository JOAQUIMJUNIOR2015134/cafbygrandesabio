const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('cafbygrandesabio.db', (err) => {
  if (err) {
    console.error('Erro:', err);
    return;
  }
  
  console.log('Atualizando fotos...');
  
  db.run('UPDATE utilizadores SET foto = "/images/users/ana-silva.svg" WHERE email = "ana.silva@email.com"');
  db.run('UPDATE utilizadores SET foto = "/images/users/joao-santos.svg" WHERE email = "joao.santos@email.com"');
  db.run('UPDATE utilizadores SET foto = "/images/users/maria-oliveira.svg" WHERE email = "maria.oliveira@email.com"');
  
  console.log('✅ Fotos atualizadas para SVG!');
  db.close();
});
