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
    parecer: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "parecer"
    }
  };
  const options = {
    tableName: "editor",
    comment: "",
    indexes: []
  };
  const EditorModel = sequelize.define("editorModel", attributes, options);
  return EditorModel;
};