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
    papelNaEquipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "papelNaEquipeId",
      references: {
        key: "papelNaEquipeId",
        model: "papelnaequipeModel"
      }
    }
  };
  const options = {
    tableName: "membrodeequipe",
    comment: "",
    indexes: [{
      name: "papelNaEquipeId",
      unique: false,
      type: "BTREE",
      fields: ["papelNaEquipeId"]
    }]
  };
  const MembrodeequipeModel = sequelize.define("membrodeequipeModel", attributes, options);
  return MembrodeequipeModel;
};