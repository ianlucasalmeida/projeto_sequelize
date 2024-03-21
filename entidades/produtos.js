const { FOREIGNKEYS } = require("sequelize/types/query-types");
const { sequelize } = require("../app");

const Produtos = sequelize.define({
  id:{
    type:DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey:true
  },
  nome:{
    type:DataTypes.VARCHAR,
    autoIncrement:false,
    primaryKey:false

  },
  descricao:{
    type:DataTypes.TEXT,
    
  },
  preco:{
    type:DataTypes.DECIMAL(10,2),


  },
  id_categoria:{
    type:DataTypes.INTERGER,
  },
  disponivel:{
    type:DataTypes.BOOLEAN,
  },
  

});

module.exports=Produtos