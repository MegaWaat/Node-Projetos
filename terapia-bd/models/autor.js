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
    trabalhoAcademicoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "trabalhoAcademicoId",
      references: {
        key: "trabalhoAcademicoId",
        model: "trabalhoacademicoModel"
      }
    }
  };
  const options = {
    tableName: "autor",
    comment: "",
    indexes: [{
      name: "trabalhoAcademicoId",
      unique: false,
      type: "BTREE",
      fields: ["trabalhoAcademicoId"]
    }]
  };
  const AutorModel = sequelize.define("autorModel", attributes, options);
  return AutorModel;
};