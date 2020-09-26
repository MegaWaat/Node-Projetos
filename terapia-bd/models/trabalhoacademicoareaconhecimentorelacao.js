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
    tableName: "trabalhoacademicoareaconhecimentorelacao",
    comment: "",
    indexes: [{
      name: "areaConhecimentoId",
      unique: false,
      type: "BTREE",
      fields: ["areaConhecimentoId"]
    }]
  };
  const TrabalhoacademicoareaconhecimentorelacaoModel = sequelize.define("trabalhoacademicoareaconhecimentorelacaoModel", attributes, options);
  return TrabalhoacademicoareaconhecimentorelacaoModel;
};