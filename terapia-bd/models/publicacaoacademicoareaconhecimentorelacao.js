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
        model: "publicacaoacademicaModel"
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
    tableName: "publicacaoacademicoareaconhecimentorelacao",
    comment: "",
    indexes: [{
      name: "areaConhecimentoId",
      unique: false,
      type: "BTREE",
      fields: ["areaConhecimentoId"]
    }]
  };
  const PublicacaoacademicoareaconhecimentorelacaoModel = sequelize.define("publicacaoacademicoareaconhecimentorelacaoModel", attributes, options);
  return PublicacaoacademicoareaconhecimentorelacaoModel;
};