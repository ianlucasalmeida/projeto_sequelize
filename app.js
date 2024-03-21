/**import{sequelize} = require('./conectar/db')

const Produto = sequelize.define('Produto', {
  nome:{
    type: Sequelize.STRING(255),
    allowNull: false
  },
  descricao:{
    type:Sequelize.TEXT,
    allowNull: true
  },
  preco:{
    type:Sequelize.DECIMAL(10,2),
    allowNull:false
  },
  disponivel: {
    type:Sequelize.BOOLEAN,
    allowNull:false,
    defaultValue:true
  },
});*/

const Categorias = require('./entidades/categorias');

const sequelize  = require("./conectar/db") ;

sequelize.sync().then(() => {
  console.log('Sincronizado')
}).catch((err)=>{
  console.error('Erro ao sincronizar banco de dados' + err.message);
});