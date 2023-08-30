var DataTypes = require("sequelize").DataTypes;
var _mensajero = require("./mensajero");
var _mensajero_has_ruta = require("./mensajero_has_ruta");
var _package = require("./package");
var _ruta = require("./ruta");
var _user = require("./user");

function initModels(sequelize) {
  var mensajero = _mensajero(sequelize, DataTypes);
  var mensajero_has_ruta = _mensajero_has_ruta(sequelize, DataTypes);
  var package = _package(sequelize, DataTypes);
  var ruta = _ruta(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  mensajero.belongsToMany(ruta, { as: 'ruta_idruta_ruta', through: mensajero_has_ruta, foreignKey: "mensajero_idmensajero", otherKey: "ruta_idruta" });
  package.belongsToMany(package, { as: 'package_mensajero_idmensajero_packages', through: user, foreignKey: "package_idpackage", otherKey: "package_mensajero_idmensajero" });
  package.belongsToMany(package, { as: 'package_idpackage_packages', through: user, foreignKey: "package_mensajero_idmensajero", otherKey: "package_idpackage" });
  ruta.belongsToMany(mensajero, { as: 'mensajero_idmensajero_mensajeros', through: mensajero_has_ruta, foreignKey: "ruta_idruta", otherKey: "mensajero_idmensajero" });
  mensajero_has_ruta.belongsTo(mensajero, { as: "mensajero_idmensajero_mensajero", foreignKey: "mensajero_idmensajero"});
  mensajero.hasMany(mensajero_has_ruta, { as: "mensajero_has_ruta", foreignKey: "mensajero_idmensajero"});
  package.belongsTo(mensajero, { as: "mensajero_idmensajero_mensajero", foreignKey: "mensajero_idmensajero"});
  mensajero.hasMany(package, { as: "packages", foreignKey: "mensajero_idmensajero"});
  user.belongsTo(package, { as: "package_idpackage_package", foreignKey: "package_idpackage"});
  package.hasMany(user, { as: "users", foreignKey: "package_idpackage"});
  user.belongsTo(package, { as: "package_mensajero_idmensajero_package", foreignKey: "package_mensajero_idmensajero"});
  package.hasMany(user, { as: "package_mensajero_idmensajero_users", foreignKey: "package_mensajero_idmensajero"});
  mensajero_has_ruta.belongsTo(ruta, { as: "ruta_idruta_rutum", foreignKey: "ruta_idruta"});
  ruta.hasMany(mensajero_has_ruta, { as: "mensajero_has_ruta", foreignKey: "ruta_idruta"});

  return {
    mensajero,
    mensajero_has_ruta,
    package,
    ruta,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
