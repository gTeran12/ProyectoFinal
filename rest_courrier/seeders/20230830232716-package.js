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
    await queryInterface.bulkInsert('package', [

      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idpackage: "2",
        peso: "1.4",
        descripcion: "Ropa",
        mensajero_idmensajero: "1208"
      },
      {
        idpackage: "3",
        peso: "2.1",
        descripcion: "Zapatos",
        mensajero_idmensajero: "1311"
      },
      {
        idpackage: "1225",
        peso: "4.5",
        descripcion: "Alexa",
        mensajero_idmensajero: "1105"
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
    await queryInterface.bulkDelete('package', null, {});

  }
};
