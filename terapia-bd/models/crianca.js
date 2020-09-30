const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    criancaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "criancaId"
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idade"
    },
    grau: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "grau"
    },
    nomePais: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nomePais"
    }
  };
  const options = {
    tableName: "crianca",
    comment: "",
    indexes: []
  };
  const CriancaModel = sequelize.define("criancaModel", attributes, options);
  return CriancaModel;
};