const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    papelNaEquipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "papelNaEquipeId"
    },
    nome: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    }
  };
  const options = {
    tableName: "papelnaequipe",
    comment: "",
    indexes: []
  };
  const PapelnaequipeModel = sequelize.define("papelnaequipeModel", attributes, options);
  return PapelnaequipeModel;
};