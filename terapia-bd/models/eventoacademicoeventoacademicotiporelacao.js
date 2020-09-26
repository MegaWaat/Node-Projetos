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
        model: "eventoacademicoModel"
      }
    },
    eventoAcademicoTipoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "eventoAcademicoTipoId",
      references: {
        key: "eventoAcademicoTipoId",
        model: "eventoacademicotipoModel"
      }
    }
  };
  const options = {
    tableName: "eventoacademicoeventoacademicotiporelacao",
    comment: "",
    indexes: [{
      name: "eventoAcademicoTipoId",
      unique: false,
      type: "BTREE",
      fields: ["eventoAcademicoTipoId"]
    }]
  };
  const EventoacademicoeventoacademicotiporelacaoModel = sequelize.define("eventoacademicoeventoacademicotiporelacaoModel", attributes, options);
  return EventoacademicoeventoacademicotiporelacaoModel;
};