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
    eventoCronogramaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "eventoCronogramaId",
      references: {
        key: "eventoCronogramaId",
        model: "eventocronogramaModel"
      }
    }
  };
  const options = {
    tableName: "eventoacademicoeventocronogramarelacao",
    comment: "",
    indexes: [{
      name: "eventoCronogramaId",
      unique: false,
      type: "BTREE",
      fields: ["eventoCronogramaId"]
    }]
  };
  const EventoacademicoeventocronogramarelacaoModel = sequelize.define("eventoacademicoeventocronogramarelacaoModel", attributes, options);
  return EventoacademicoeventocronogramarelacaoModel;
};