const { sequelize } = require("../app");

const Pedidos = sequelize.define({
  id:{
    type:DataTypes.BIGINT,
    autoIncrement:true,
    primaryKey:true
  },
  id_cliente:{
    type:DataTypes.INTEGER,

  },
  data_pedido:{
    type:DataTypes.DATA
  },
  status:{
    type:DataTypes.VARCHAR(50),

  },

  
})

module.exports=Pedidos