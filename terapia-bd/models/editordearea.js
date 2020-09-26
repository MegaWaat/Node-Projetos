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
    areaConhecimentoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "areaConhecimentoId",
      references: {
        key: "areaConhecimentoId",
        model: "areaconhecimentoModel"
      }
    }
  };
  const options = {
    tableName: "editordearea",
    comment: "",
    indexes: [{
      name: "areaConhecimentoId",
      unique: false,
      type: "BTREE",
      fields: ["areaConhecimentoId"]
    }]
  };
  const EditordeareaModel = sequelize.define("editordeareaModel", attributes, options);
  return EditordeareaModel;
};