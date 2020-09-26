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
        model: "revistaacademicaModel"
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
        model: "editordeareaModel"
      }
    }
  };
  const options = {
    tableName: "revistaacademicaeditordearearelacao",
    comment: "",
    indexes: [{
      name: "cadastroId",
      unique: false,
      type: "BTREE",
      fields: ["cadastroId"]
    }]
  };
  const RevistaacademicaeditordearearelacaoModel = sequelize.define("revistaacademicaeditordearearelacaoModel", attributes, options);
  return RevistaacademicaeditordearearelacaoModel;
};