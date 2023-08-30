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
    await queryInterface.bulkInsert('mensajero_has_ruta', [

      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        mensajero_idmensajero: "1105",
        ruta_idruta: "1",
      },
      {
        mensajero_idmensajero: "1311",
        ruta_idruta: "1",
      },
      {
        mensajero_idmensajero: "1208",
        ruta_idruta: "2",
      },
      {
        mensajero_idmensajero: "1105",
        ruta_idruta: "3",
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
    await queryInterface.bulkDelete('mensajero_has_ruta', null, {});

  }
};
