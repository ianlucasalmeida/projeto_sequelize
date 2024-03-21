const { sequelize } = require("../app");

const Clientes = sequelize.define({
  id:{
    type:DataType.BIGINT,
    autoIncrement:true,
    primaryKey:true
  },
  nome:{
    type:DataType.VARCHAR(100),

  },
  email:{
    type:DataType.VARCHAR(100),

  },
  endereco:{
    type:DataType.VARCHAR(255),
  },
  telefone:{
    type:DataType.VARCHAR(30),
  }
  
})

module.exports=Clientes