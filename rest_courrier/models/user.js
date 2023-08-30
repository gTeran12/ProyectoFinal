const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    iduser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usermail: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "usermail_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    package_idpackage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'package',
        key: 'idpackage'
      }
    },
    package_mensajero_idmensajero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'package',
        key: 'mensajero_idmensajero'
      }
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iduser" },
          { name: "package_idpackage" },
          { name: "package_mensajero_idmensajero" },
        ]
      },
      {
        name: "iduser_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iduser" },
        ]
      },
      {
        name: "usermail_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usermail" },
        ]
      },
      {
        name: "fk_user_package1_idx",
        using: "BTREE",
        fields: [
          { name: "package_idpackage" },
          { name: "package_mensajero_idmensajero" },
        ]
      },
    ]
  });
};
