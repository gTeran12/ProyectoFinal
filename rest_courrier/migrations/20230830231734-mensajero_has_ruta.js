'use strict';

/* IMPORTE El ARCHIVO CON EL MODELO */
const mensajero_has_rutaClase = require('../models').mensajero_has_ruta;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
    await mensajero_has_rutaClase.sync()
  },

  async down (queryInterface, Sequelize) {
    /* ELIMINACIÓN LA TABLA */
    await queryInterface.dropTable('mensajero_has_ruta');
  }
};
