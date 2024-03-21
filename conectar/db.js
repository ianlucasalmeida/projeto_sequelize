const Sequelize = require('sequelize');

// Configurando a conexão com o banco de dados
const sequelize = new Sequelize('projeto', 'root', 'Lince123@', {
dialect: 'mysql', // ou o dialect do seu banco de dados
host: 'localhost', // ou o host do seu banco de dados
});

// Testando a conexão
sequelize.authenticate()
.then(() => {
console.log('Conexão bem-sucedida com o banco de dados.');
})
.catch(err => {
console.error('Erro ao conectar ao banco de dados:', err);
});

module.exports=sequelize;