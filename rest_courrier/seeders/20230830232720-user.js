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
    await queryInterface.bulkInsert('user', [

      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        iduser: "1",
        usermail: "gteran@espol.edu.ec",
        password: "Mito.1225",
        package_idpackage: "1225",
        package_mensajero_idmensajero: "1105"
      },
      {
        iduser: "2",
        usermail: "dbust@espol.edu.ec",
        password: "Daniel.1234",
        package_idpackage: "3",
        package_mensajero_idmensajero: "1311"
      },
      {
        iduser: "3",
        usermail: "evaca@apsposus.com",
        password: "Evelin.1234",
        package_idpackage: "2",
        package_mensajero_idmensajero: "1208"
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
    await queryInterface.bulkDelete('user', null, {});
  }
};

