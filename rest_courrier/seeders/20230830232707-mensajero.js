'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('mensajero', [

      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idmensajero: "1105",
        nombre: "Evelin",
        vehiculo: "Moto"
      },
      {
        idmensajero: "1208",
        nombre: "Douglas",
        vehiculo: "Auto"
      },
      {
        idmensajero: "1311",
        nombre: "Jessica",
        vehiculo: "Moto"
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('mensajero', null, {});

  }
};
