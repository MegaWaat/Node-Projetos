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
      autoIncrement: true,
      comment: null,
      field: "cadastroId"
    },
    nome: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    sobrenome: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sobrenome"
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    facebook: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "facebook"
    },
    orchid: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orchid"
    },
    lattes: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "lattes"
    },
    enderecoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "enderecoId",
      references: {
        key: "enderecoId",
        model: "enderecoModel"
      }
    },
    instituicaoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "instituicaoId",
      references: {
        key: "instituicaoId",
        model: "instituicaoModel"
      }
    }
  };
  const options = {
    tableName: "cadastro",
    comment: "",
    indexes: [{
      name: "enderecoId",
      unique: false,
      type: "BTREE",
      fields: ["enderecoId"]
    }, {
      name: "instituicaoId",
      unique: false,
      type: "BTREE",
      fields: ["instituicaoId"]
    }]
  };
  const CadastroModel = sequelize.define("cadastroModel", attributes, options);
  return CadastroModel;
};