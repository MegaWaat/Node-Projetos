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
        model: "membrodeequipeModel"
      }
    }
  };
  const options = {
    tableName: "organizacaoeventoacademico",
    comment: "",
    indexes: [{
      name: "cadastroId",
      unique: false,
      type: "BTREE",
      fields: ["cadastroId"]
    }]
  };
  const OrganizacaoeventoacademicoModel = sequelize.define("organizacaoeventoacademicoModel", attributes, options);
  return OrganizacaoeventoacademicoModel;
};