// importa o knex
const knex = require("knex");

// importa configurações do banco de dados
const configuration = require("../../knexfile");

// cria conexão
const connection = knex(configuration.development);

// exporta a conexão
module.exports = connection;