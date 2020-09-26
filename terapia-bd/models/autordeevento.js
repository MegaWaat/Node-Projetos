const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    cadastroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "cadastroId",
      references: {
        key: "cadastroId",
        model: "cadastroModel"
      }
    },
    enviosMaximo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "envios_maximo"
    }
  };
  const options = {
    tableName: "autordeevento",
    comment: "",
    indexes: []
  };
  const AutordeeventoModel = sequelize.define("autordeeventoModel", attributes, options);
  return AutordeeventoModel;
};