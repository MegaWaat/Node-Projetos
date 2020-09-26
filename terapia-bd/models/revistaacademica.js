const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    publicacaoAcademicaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "publicacaoAcademicaId",
      references: {
        key: "publicacaoAcademicaId",
        model: "publicacaoacademicaModel"
      }
    },
    editorChefeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "editorChefeId",
      references: {
        key: "cadastroId",
        model: "editorModel"
      }
    }
  };
  const options = {
    tableName: "revistaacademica",
    comment: "",
    indexes: [{
      name: "publicacaoAcademicaId",
      unique: false,
      type: "BTREE",
      fields: ["publicacaoAcademicaId"]
    }, {
      name: "editorChefeId",
      unique: false,
      type: "BTREE",
      fields: ["editorChefeId"]
    }]
  };
  const RevistaacademicaModel = sequelize.define("revistaacademicaModel", attributes, options);
  return RevistaacademicaModel;
};