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

    await queryInterface.bulkInsert('ruta', [

      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idruta:"1",
        origen:"Norte",
        destino:"Sur",
        fechaEntrega:"2023-08-30"
      },
      {
        idruta:"2",
        origen:"Centro",
        destino:"Norte",
        fechaEntrega:"2023-08-31"
      },
      {
        idruta:"3",
        origen:"Sur",
        destino:"Norte",
        fechaEntrega:"2023-09-05"
      },
      {
        idruta:"4",
        origen:"Norte",
        destino:"Centro",
        fechaEntrega:"2023-09-05"
      },
      {
        idruta:"5",
        origen:"Norte",
        destino:"Sur",
        fechaEntrega:"2023-09-05"
      },
      {
        idruta:"6",
        origen:"Sur",
        destino:"Centro",
        fechaEntrega:"2023-09-06"
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
    await queryInterface.bulkDelete('ruta', null, {});

  }
};
