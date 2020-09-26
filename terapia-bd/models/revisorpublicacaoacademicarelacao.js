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
        model: "revisorModel"
      }
    },
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
        model: "publicacaoacademicaModel"
      }
    }
  };
  const options = {
    tableName: "revisorpublicacaoacademicarelacao",
    comment: "",
    indexes: [{
      name: "publicacaoAcademicaId",
      unique: false,
      type: "BTREE",
      fields: ["publicacaoAcademicaId"]
    }]
  };
  const RevisorpublicacaoacademicarelacaoModel = sequelize.define("revisorpublicacaoacademicarelacaoModel", attributes, options);
  return RevisorpublicacaoacademicarelacaoModel;
};