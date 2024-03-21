const {DataTypes} = require("sequelize")

const sequelize = require('../conectar/db')

const Categoria = sequelize.define('Categoria', {
  id:{
    type:DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey:true
  },
  nome:{
    type:DataTypes.STRING,
    autoIncrement:false,
    primaryKey:false

  },
  descricao:{
    type:DataTypes.TEXT,

  }


})

module.exports=Categoria