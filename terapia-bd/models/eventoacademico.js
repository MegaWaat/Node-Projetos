const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    publicacaoAcademicaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "publicacaoAcademicaId",
      references: {
        key: "publicacaoAcademicaId",
        model: "publicacaoacademicaModel"
      }
    },
    inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "inicio"
    },
    termino: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "termino"
    },
    enderecoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "enderecoId",
      references: {
        key: "enderecoId",
        model: "enderecoModel"
      }
    }
  };
  const options = {
    tableName: "eventoacademico",
    comment: "",
    indexes: [{
      name: "eventoacademico_ibfk_2",
      unique: false,
      type: "BTREE",
      fields: ["enderecoId"]
    }]
  };
  const EventoacademicoModel = sequelize.define("eventoacademicoModel", attributes, options);
  return EventoacademicoModel;
};