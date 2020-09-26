const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
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
    },
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
    }
  };
  const options = {
    tableName: "autorrevistaacademicarelacao",
    comment: "",
    indexes: [{
      name: "cadastroId",
      unique: false,
      type: "BTREE",
      fields: ["cadastroId"]
    }]
  };
  const AutorrevistaacademicarelacaoModel = sequelize.define("autorrevistaacademicarelacaoModel", attributes, options);
  return AutorrevistaacademicarelacaoModel;
};