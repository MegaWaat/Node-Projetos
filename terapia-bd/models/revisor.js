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
    }
  };
  const options = {
    tableName: "revisor",
    comment: "",
    indexes: []
  };
  const RevisorModel = sequelize.define("revisorModel", attributes, options);
  return RevisorModel;
};