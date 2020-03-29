const knex = require('knex');
const configuration = require('../../knexfile');


//Seleciona do arquivo knexfile.js o tipo de conexão
const connection = knex(configuration.development);

module.exports = connection;