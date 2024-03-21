const { sequelize } = require("../app");

const Pedidos = sequelize.define({
  id:{
    type:DataTypes.BIGINT,
    autoIncrement:true,
    primaryKey:true
  },
  id_produto:{
    type:DataTypes.INTERGER,
  },
  id_pedido:{
    type:DataTypes.INTERGER,
  },
  quantidade:{
    type:DataTypes.INTERGER,
  },
  preco_unitario:{
    type:DataTypes.DECIMAL(10,2),
  },
  
  
})

module.exports=Pedidos