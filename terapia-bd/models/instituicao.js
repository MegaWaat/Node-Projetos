const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    instituicaoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "instituicaoId"
    },
    nome: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    sigla: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sigla"
    }
  };
  const options = {
    tableName: "instituicao",
    comment: "",
    indexes: []
  };
  const InstituicaoModel = sequelize.define("instituicaoModel", attributes, options);
  return InstituicaoModel;
};