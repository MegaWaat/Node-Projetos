const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    eventoAcademicoTipoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "eventoAcademicoTipoId"
    },
    nome: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    }
  };
  const options = {
    tableName: "eventoacademicotipo",
    comment: "",
    indexes: []
  };
  const EventoacademicotipoModel = sequelize.define("eventoacademicotipoModel", attributes, options);
  return EventoacademicotipoModel;
};