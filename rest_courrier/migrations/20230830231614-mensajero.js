'use strict';

/* IMPORTE El ARCHIVO CON EL MODELO */
const mensajeroClase = require('../models').mensajero;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
    await mensajeroClase.sync()
  },

  async down (queryInterface, Sequelize) {
    /* ELIMINACIÓN LA TABLA */
    await queryInterface.dropTable('mensajero');
  }
};
